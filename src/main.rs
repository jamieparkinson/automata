mod universe;

use universe::*;

fn rule_110(neighborhood: (&Cell, &Cell, &Cell)) -> Cell {
    match neighborhood {
        (Cell::Dead, Cell::Dead, Cell::Dead) => Cell::Dead,
        (Cell::Dead, Cell::Dead, Cell::Alive) => Cell::Alive,
        (Cell::Dead, Cell::Alive, Cell::Dead) => Cell::Alive,
        (Cell::Dead, Cell::Alive, Cell::Alive) => Cell::Alive,
        (Cell::Alive, Cell::Dead, Cell::Dead) => Cell::Dead,
        (Cell::Alive, Cell::Dead, Cell::Alive) => Cell::Alive,
        (Cell::Alive, Cell::Alive, Cell::Dead) => Cell::Alive,
        (Cell::Alive, Cell::Alive, Cell::Alive) => Cell::Dead,
    }
}

fn main() {
    let mut universe: Universe = Universe::create_random(100);
    for _ in 0..20 {
        universe.display();
        universe = universe.next_cells(rule_110);
    }
}
