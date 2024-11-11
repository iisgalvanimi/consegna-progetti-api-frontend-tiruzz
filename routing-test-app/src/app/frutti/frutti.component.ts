import { Component } from '@angular/core';

@Component({
  selector: 'app-frutti',
  templateUrl: './frutti.component.html',
  styleUrls: ['./frutti.component.css']
})
export class FruttiComponent {
  fruits = [
    { name: 'l3ineb', emoji: '🍇' },
    { name: 'btikha', emoji: '🍈' },
    { name: 'della7a', emoji: '🍉' },
    { name: 'limouna', emoji: '🍊' },
    { name: '7ameDa', emoji: '🍋' },
    { name: 'banana', emoji: '🍌' },
    { name: 'ananaSa', emoji: '🍍' },
    { name: 'teffa7a 7emra', emoji: '🍎' },
    { name: 'teffa7a kheDra', emoji: '🍏' },
    { name: 'nGaSa', emoji: '🍐' },
    { name: 'khokha', emoji: '🍑' },
    { name: '7eb lmlouk', emoji: '🍒' },
  ]
}
