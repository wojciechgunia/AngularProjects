import { Image } from 'src/app/modules/core/models/image.model';
import { ImageService } from './../../../../../core/services/image.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
})
export class AddProductFormComponent {
  selectedFile: File | null = null;
  fileName: string | null = null;

  imageUrls: Image[] = [];

  constructor(private imageService: ImageService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();

      formData.append('multipartFile', this.selectedFile);

      this.imageService.addImage(formData).subscribe({
        next: (resp) => {
          this.imageUrls = [...this.imageUrls, { ...resp }];
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
