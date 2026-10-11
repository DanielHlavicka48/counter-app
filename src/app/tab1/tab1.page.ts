import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab1Page {
  counterName = '';
  count = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset(): void {
    this.count = 0;
  }
 saveCounter() {
    // Načtení existující historie
    const history = JSON.parse(
      localStorage.getItem('history') || '[]'
    );

    // Vytvoření nového záznamu
    const record = {
      name: this.counterName,
      value: this.count,
     date: new Date().toISOString()
    };

    // Přidání záznamu do historie
    history.push(record);

    // Uložení aktualizované historie
    localStorage.setItem('history', JSON.stringify(history));
  }

}