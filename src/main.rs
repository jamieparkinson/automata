mod universe;

use universe::*;

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

fn main() {
    let mut universe: Universe = Universe::create_random(100);
    let rule_110 = &make_rule(15);
    for _ in 0..1000 {
        universe.display();
        universe = universe.next_cells(rule_110);
    }
}
