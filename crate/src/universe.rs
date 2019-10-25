use rand::prelude::*;
use std::fmt;
use std::ops::{Index, IndexMut};

#[repr(u8)]
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

pub type Neighborhood<'a> = (&'a Cell, &'a Cell, &'a Cell);

pub struct Universe(Vec<Cell>);

impl Index<i32> for Universe {
    type Output = Cell;

    fn index(&self, i: i32) -> &Self::Output {
        let vec = &self.0;
        let size = vec.len() as i32;
        &vec[((i as i32 + size) % size) as usize]
    }
}

impl IndexMut<i32> for Universe {
    fn index_mut(&mut self, i: i32) -> &mut Self::Output {
        let vec = &mut self.0;
        let size = vec.len() as i32;
        &mut vec[((i as i32 + size) % size) as usize]
    }
}

impl fmt::Display for Universe {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let strings: Vec<String> = self.0.iter().map(|cell| format!("{}", &cell)).collect();
        write!(f, "{}", strings.join(" "))
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

    pub fn get_ptr(&self) -> *const Cell {
        self.0.as_ptr()
    }

    pub fn get_size(&self) -> usize {
        self.0.len()
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
