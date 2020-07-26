import {Component, OnInit} from '@angular/core';
import {Item} from '../../../model/item';
import {Router} from '@angular/router';
import {LoaderService} from '../../../shared/loader/service/loader.service';
import {ArchiveService} from '../../services/archive.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  itemsList: Array<Item> = [];

  constructor(
    private archiveService: ArchiveService,
    private router: Router,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.loadAllItems();
  }

  home(): void {
    this.router.navigate(['/']);
  }

  private loadAllItems(): void {

    this.loaderService.show();

    this.archiveService.getClosedItems()
      .then(closedItems => {
        this.loaderService.hide();
        this.itemsList = closedItems;
      })
      .catch(_ => {
        this.loaderService.hide();
        this.snackBar.open('Archiv kann nicht angezeigt werden.', 'Ok', {
          duration: 2000
        });
      });

  }

}