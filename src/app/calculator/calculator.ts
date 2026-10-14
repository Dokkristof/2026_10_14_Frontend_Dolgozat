/*
* File: calculator.ts
* Author: Doktor Kristóf Márk
* Copyright: 2026, Doktor Kristóf Márk
* Group: Szoft II/N
* Date: 2026-10-14
* Github: https://github.com/Dokkristof
* Licenc: MIT
*/


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {
  eDiagonal: number | null = null;
  fDiagonal: number | null = null;
  area: number | null = null;

  calculate(): void {
    if (this.eDiagonal === null || this.fDiagonal === null || this.eDiagonal <= 0 || this.fDiagonal <= 0) {
      this.area = null;
      return;
    }
    this.area = (this.eDiagonal * this.fDiagonal) / 2;
  }
}
