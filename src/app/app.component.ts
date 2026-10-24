import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from './services/progress.service';

interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

@Component({
  selector: 'hwh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavExtended = false;
  installPrompt: InstallPromptEvent | null = null;

  constructor(private router: Router, public progress: ProgressService) {
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      this.installPrompt = event as InstallPromptEvent;
    });
    window.addEventListener('appinstalled', () => {
      this.installPrompt = null;
    });
  }

  headnavSelect(value: string) {
    if (value === 'maps') {
      this.sidenavExtended = true;
      return;
    }
    if (value === 'github') {
      window.open('https://github.com/Rue-G19/HyruleWarriorsHelper', '_blank', 'noopener');
      return;
    }
    this.router.navigate([value]);
  }

  async installApp(): Promise<void> {
    if (!this.installPrompt) {
      return;
    }
    const prompt = this.installPrompt;
    this.installPrompt = null;
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } catch {
      this.progress.announceStatus('The app could not be installed right now. Try using your browser’s install option.');
    }
  }
}
