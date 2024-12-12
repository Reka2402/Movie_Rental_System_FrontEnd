import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrl: './password-update.component.css'
})
export class PasswordUpdateComponent {
  passwordForm: FormGroup;
  currentPassword: string | null = null;
  isPasswordUpdated: boolean = false;

  constructor(private tokenService: TokenService, private fb: FormBuilder) {
    // Initialize the form
    this.passwordForm = this.fb.group({
      currentPassword: [{ value: '', disabled: true }],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });

    this.loadCurrentPassword();
  }

  loadCurrentPassword(): void {
    const token = this.tokenService.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      this.currentPassword = decodedToken?.password || null;

      if (this.currentPassword) {
        this.passwordForm.patchValue({
          currentPassword: this.currentPassword
        });
      }
    }
  }

  updatePassword(): void {
    if (this.passwordForm.invalid) {
      alert('Please fill the form correctly.');
      return;
    }

    const { newPassword, confirmPassword } = this.passwordForm.value;

    if (newPassword !== confirmPassword) {
      alert('New Password and Confirm Password do not match.');
      return;
    }

    // Logic to update password (API call or local storage update)
    alert('Password updated successfully!');
    this.isPasswordUpdated = true;
  }
}
