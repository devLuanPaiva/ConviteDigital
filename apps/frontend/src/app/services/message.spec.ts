import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('MessageService', () => {
  let service: MessageService;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [MessageService, { provide: MatSnackBar, useValue: spy }],
    });

    service = TestBed.inject(MessageService);
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  it('should show a success message', () => {
    const message = 'Operation Successful!';
    service.success(message);

    expect(snackBarSpy.open).toHaveBeenCalledWith(message, 'Close', {
      duration: 5000,
      panelClass: 'toast-success',
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  });
});
