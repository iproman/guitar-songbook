import { Component, OnInit } from '@angular/core';
import { Artist, ArtistsService } from '../../services/artists.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {

  labels = [
    {title: 'Search', url: '/folder/Inbox', icon: 'search'},
    {title: 'Reload', url: '/folder/Favorites', icon: 'reload'},
    {title: 'Submenu', url: '/folder/Favorites', icon: 'ellipsis-vertical'},
  ];

  artists$: Observable<Artist[]>;

  constructor(
    private artistsService: ArtistsService
  ) {
  }

  ngOnInit() {
    this.artists$ = this.artistsService.getArtists();
  }

}
