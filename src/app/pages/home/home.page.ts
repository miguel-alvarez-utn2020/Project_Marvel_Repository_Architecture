import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/core/models/hero/hero.model';
import { HerosService } from 'src/app/data/services/heros.service';
import { MOCK_RESPONSE } from 'src/app/data/services/mock-response';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText]
})
export class HomePage implements OnInit {

  // public heroList!: Observable<Hero[]>;
  public heroList!: Observable<any[]>;
  private heroService = inject(HerosService)
  private mockResponse = MOCK_RESPONSE;
  ngOnInit() {
    // this.heroList = this.heroService.getHeroList();
    this.heroList = of(this.mockResponse.data.results)
  }

}
