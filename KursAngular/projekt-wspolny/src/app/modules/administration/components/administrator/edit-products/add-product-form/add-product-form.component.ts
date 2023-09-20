import { Image } from 'src/app/modules/core/models/image.model';
import { ImageService } from './../../../../../core/services/image.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddProduct } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CategoriesService } from 'src/app/modules/core/services/categories.service';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/modules/core/models/categories.model';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
})
export class AddProductFormComponent {
  selectedFile: File | null = null;
  fileName: string | null = null;

  imageUrls: Image[] = [];
  error: string | null = null;

  addProductForm: FormGroup<AddProduct> = this.formService.initAddProductForm();

  categories: BehaviorSubject<Category[]> = this.categoriesService.categories;

  constructor(
    private imageService: ImageService,
    private formService: FormService,
    private categoriesService: CategoriesService,
  ) {}

  get controls() {
    return this.addProductForm.controls;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  uploadFile() {
    this.error = null;
    if (this.selectedFile) {
      const formData = new FormData();

      formData.append('multipartFile', this.selectedFile);

      this.imageService.addImage(formData).subscribe({
        next: (resp) => {
          this.imageUrls = [...this.imageUrls, { ...resp }];
        },
        error: (err) => {
          this.error = err;
        },
      });
    }
  }

  setActiveImages(imageArray: Image[]) {
    this.imageUrls = [...imageArray];
  }

  getErrorMessage(typ: string, control: FormControl): string {
    return this.formService.getErrorMessage(typ, control);
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Wpisz opis produktu tutaj...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['insertImage', 'insertVideo']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  addProduct() {
    //
  }
}
