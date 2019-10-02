use rand::prelude::*;
use std::fmt;
use std::ops::Index;

pub enum Cell {
    Dead,
    Alive,
}

impl fmt::Display for Cell {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            "{}",
            match self {
                Cell::Alive => "■",
                Cell::Dead => "□",
            }
        )
    }
}

type Neighborhood<'a> = (&'a Cell, &'a Cell, &'a Cell);

pub struct Universe(Vec<Cell>);

impl Index<i32> for Universe {
    type Output = Cell;

    fn index(&self, i: i32) -> &Self::Output {
        let vec = &self.0;
        let size = vec.len() as i32;
        &vec[((i as i32 + size) % size) as usize]
    }
}

impl Universe {
    pub fn create_random(size: usize) -> Self {
        let vec: Vec<Cell> = (0..size)
            .map(|_| match random::<u32>() {
                x if x < std::u32::MAX / 2 => Cell::Alive,
                _ => Cell::Dead,
            })
            .collect();
        Universe(vec)
    }

    pub fn display(&self) -> () {
        let strings: Vec<String> = self.0.iter().map(|cell| format!("{}", &cell)).collect();
        println!("{}", strings.join(" "));
    }

    pub fn next_cells<F>(&self, f: F) -> Self
    where
        F: Fn(Neighborhood) -> Cell,
    {
        Universe(
            self.0
                .iter()
                .enumerate()
                .map(|(i, x)| f((&self[i as i32 - 1], x, &self[i as i32 + 1])))
                .collect(),
        )
    }
}
