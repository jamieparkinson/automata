extern crate wasm_bindgen;
extern crate web_sys;

mod universe;

use universe::*;
use wasm_bindgen::prelude::*;
use web_sys::console;

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

fn old_main() {
    let mut universe: Universe = Universe::create_random(100);
    let rule_110 = &make_rule(15);
    for _ in 0..1000 {
        universe.display();
        universe = universe.next_cells(rule_110);
    }
}

#[wasm_bindgen]
pub fn hello() {
    set_panic_hook();
    console::log_1(&JsValue::from_str("hello world!"))
}
