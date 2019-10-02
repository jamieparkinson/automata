use std::fmt;
use rand::prelude::*;

const UNIVERSE_SIZE: usize = 100;
const N_EVOLUTIONS: u32 = 20;

enum Cell {
    Dead,
    Alive,
}

type Universe = Vec<Cell>;

impl fmt::Display for Cell {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", match self {
            Cell::Alive => "■",
            Cell::Dead => "□"
        })
    }
}

trait EnhancedUniverse {
    type Item;
    fn get_periodic(&self, i: i32) -> &Self::Item;
    fn display(&self) -> ();
}

impl EnhancedUniverse for Universe {
    type Item = Cell;
    fn get_periodic(&self, i: i32) -> &Self::Item {
        let size = self.len() as i32;
        &self[((i + size) % size) as usize]
    }
    fn display(&self) -> () {
        let strings: Vec<String> = self.iter()
            .map(|cell| {
                format!("{}", &cell)
            })
            .collect();
        println!("{}", strings.join(" "));
    }
}

fn next_cell_state(neighborhood: (&Cell, &Cell, &Cell)) -> Cell {
    match neighborhood {
        (Cell::Dead, Cell::Dead, Cell::Dead) => Cell::Dead,
        (Cell::Dead, Cell::Dead, Cell::Alive) => Cell::Alive,
        (Cell::Dead, Cell::Alive, Cell::Dead) => Cell::Alive,
        (Cell::Dead, Cell::Alive, Cell::Alive) => Cell::Alive,
        (Cell::Alive, Cell::Dead, Cell::Dead) => Cell::Dead,
        (Cell::Alive, Cell::Dead, Cell::Alive) => Cell::Alive,
        (Cell::Alive, Cell::Alive, Cell::Dead) => Cell::Alive,
        (Cell::Alive, Cell::Alive, Cell::Alive) => Cell::Dead
    }
}

fn random_universe() -> Universe {
    (0..UNIVERSE_SIZE)
        .map(|_| {
            if random::<u32>() > std::u32::MAX / 2 {
                Cell::Alive
            } else {
                Cell::Dead
            }
        })
        .collect()
}

fn next_universe(universe: Universe) -> Universe {
    universe.iter()
        .enumerate()
        .map(|(i, x)| {
            next_cell_state((universe.get_periodic(i as i32 - 1), x, universe.get_periodic(i as i32 + 1)))
        })
        .collect()
}

fn main() {
    let mut universe = random_universe();
    for _ in 0..N_EVOLUTIONS {
        universe.display();
        universe = next_universe(universe);
    }
}
