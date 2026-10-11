import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote
} from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
  CommonModule,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNote
],
})
export class Tab2Page {

    history: {
    name: string;
    value: number;
    date: string;
  }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ionViewWillEnter() {
    this.loadHistory();
  }

  loadHistory() {
    const saved = localStorage.getItem('history');

    console.log('Načtená historie:', saved);

    this.history = saved ? JSON.parse(saved) : [];

    console.log('Počet záznamů:', this.history.length);

     this.cdr.detectChanges();
  }

}
