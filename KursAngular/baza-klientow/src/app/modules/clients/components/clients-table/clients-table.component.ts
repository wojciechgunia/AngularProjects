import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { ClientsService } from 'src/app/modules/core/services/clients.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/modules/core/models/client.model';
import {
  map,
  merge,
  startWith,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  Subscription,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
})
export class ClientsTableComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'lp',
    'firstname',
    'surname',
    'email',
    'phone',
    'address',
    'postcode',
  ];
  dataSource!: MatTableDataSource<Client>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  filterValue = new FormControl('', { nonNullable: true });

  sub = new Subscription();

  totalCount = 0;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  pageIndex = 1;
  itemPerPage = 2;

  constructor(private clientsService: ClientsService) {}

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    this.sub.add(
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.pageIndex = this.paginator.pageIndex + 1;
            this.itemPerPage = this.paginator.pageSize;
            const sortDirection = this.sort.direction;
            const columnName = this.sort.active;
            return this.clientsService.getClients(
              this.pageIndex,
              this.itemPerPage,
              sortDirection,
              columnName
            );
          }),
          map((data) => {
            this.totalCount = data.totalCount;
            return data.clients;
          })
        )
        .subscribe((clients) => {
          this.dataSource = new MatTableDataSource<Client>(clients);
        })
    );

    this.sub.add(
      this.filterValue.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((value) => {
          const val = value?.trim();
          this.applyFilter(val);
        })
    );
  }

  applyFilter(val: string) {
    this.pageIndex = this.paginator.pageIndex + 1;
    this.itemPerPage = this.paginator.pageSize;
    const sortDirection = this.sort.direction;
    const columnName = this.sort.active;

    this.clientsService
      .getClients(
        this.pageIndex,
        this.itemPerPage,
        sortDirection,
        columnName,
        val
      )
      .subscribe({
        next: (resp) => {
          this.totalCount = resp.totalCount;
          this.dataSource = new MatTableDataSource<Client>(resp.clients);
        },
      });

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
