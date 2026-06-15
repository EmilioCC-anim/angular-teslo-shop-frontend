import { Component, inject, signal } from '@angular/core';
import { ProductTable } from "@/admin-dashboard/components/product-table/product-table";
import { ProductsService } from '@/products/services/products.service';
import { PaginationService } from '@/shared/components/pagination/pagination.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Pagination } from "@/shared/components/pagination/pagination";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTable, Pagination, RouterLink],
  templateUrl: './products-admin-page.html',
})
export class ProductsAdminPage {
  productsService = inject(ProductsService)
  paginationService = inject(PaginationService)
  productsPerPage = signal(10)

  productsResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage(), limit: this.productsPerPage() }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        offset: params.page - 1,
        limit: params.limit
      })
    }
  })

  changePageValue(event: HTMLSelectElement) {
    const value = Number(event.value);
    this.productsPerPage.set(value)
  }
}
