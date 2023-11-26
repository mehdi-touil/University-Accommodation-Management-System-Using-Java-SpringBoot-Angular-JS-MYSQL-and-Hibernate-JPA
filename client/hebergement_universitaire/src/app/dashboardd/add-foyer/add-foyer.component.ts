import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/Services/foyer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.scss'],
})
export class AddFoyerComponent {
  constructor(private _foyer_service: FoyerService, private _router: Router) {}
  AddFoyerForm = new FormGroup({
    nomFoyer: new FormControl('', Validators.required),
    capaciteFoyer: new FormControl('', Validators.required),
  });
  ajouterNouveauFoyer() {
    if (this.AddFoyerForm.valid) {
      this._foyer_service.NewFoyer(this.AddFoyerForm.value).subscribe(
        (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Operation completed successfully.',
          });
          this._router.navigateByUrl('/liste_foyer');
        },
        (error) => {}
      );
    } else if (this.AddFoyerForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid data!',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  }
}
