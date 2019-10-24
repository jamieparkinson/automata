extern crate wasm_bindgen;

mod universe;

use universe::*;
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

fn make_rule(decimal: u8) -> impl Fn(Neighborhood) -> Cell {
    let get_cell = move |bit: u8| -> Cell {
        match (decimal >> bit) & 1u8 {
            0 => Cell::Dead,
            _ => Cell::Alive,
        }
    };
    move |neighborhood: Neighborhood| match neighborhood {
        (Cell::Dead, Cell::Dead, Cell::Dead) => get_cell(0),
        (Cell::Dead, Cell::Dead, Cell::Alive) => get_cell(1),
        (Cell::Dead, Cell::Alive, Cell::Dead) => get_cell(2),
        (Cell::Dead, Cell::Alive, Cell::Alive) => get_cell(3),
        (Cell::Alive, Cell::Dead, Cell::Dead) => get_cell(4),
        (Cell::Alive, Cell::Dead, Cell::Alive) => get_cell(5),
        (Cell::Alive, Cell::Alive, Cell::Dead) => get_cell(6),
        (Cell::Alive, Cell::Alive, Cell::Alive) => get_cell(7),
    }
}

#[wasm_bindgen]
struct UniverseRenderer {
    universe: Universe,
    rule: u8,
}

#[wasm_bindgen]
impl UniverseRenderer {
    #[wasm_bindgen(constructor)]
    pub fn new(size: usize, rule: u8) -> Self {
        UniverseRenderer {
            universe: Universe::create_random(size),
            rule,
        }
    }

    pub fn cells_ptr(&self) -> *const Cell {
        self.universe.get_ptr()
    }

    pub fn tick(&mut self) -> () {
        self.universe = self.universe.next_cells(make_rule(self.rule))
    }
}
