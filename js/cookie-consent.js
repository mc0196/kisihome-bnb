/* ============================================
   Cookie Consent — gates the Google Maps embed
   (self-hosted, no external requests before consent)
   ============================================ */

function updateMapEmbed() {
  const iframe = document.getElementById('mapIframe');
  const notice = document.getElementById('mapConsentNotice');
  if (!iframe || !notice) return;

  if (CookieConsent.acceptedCategory('maps')) {
    if (!iframe.getAttribute('src')) iframe.setAttribute('src', iframe.dataset.src);
    iframe.style.display = 'block';
    notice.style.display = 'none';
  } else {
    iframe.removeAttribute('src');
    iframe.style.display = 'none';
    notice.style.display = 'flex';
  }
}

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: 'bar inline',
      position: 'bottom',
      equalWeightButtons: false,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  categories: {
    necessary: { readOnly: true },
    maps: {}
  },
  language: {
    default: localStorage.getItem('lang') || 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description: 'We only use cookies to load the Google Maps embed below. Everything else on this site works without cookies.',
          acceptAllBtn: 'Accept',
          acceptNecessaryBtn: 'Reject',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="#location">Location</a>'
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Necessary',
              description: 'Required for the site to function. Always active.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Google Maps',
              description: 'Loads the interactive map showing our location. Setting this cookie lets Google Maps remember your session.',
              linkedCategory: 'maps'
            }
          ]
        }
      },
      it: {
        consentModal: {
          title: 'Usiamo i cookie',
          description: 'Usiamo i cookie solo per caricare la mappa di Google qui sotto. Tutto il resto del sito funziona senza cookie.',
          acceptAllBtn: 'Accetta',
          acceptNecessaryBtn: 'Rifiuta',
          showPreferencesBtn: 'Gestisci preferenze',
          footer: '<a href="#location">Dove siamo</a>'
        },
        preferencesModal: {
          title: 'Preferenze cookie',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta tutti',
          savePreferencesBtn: 'Salva preferenze',
          closeIconLabel: 'Chiudi',
          sections: [
            {
              title: 'Necessari',
              description: 'Indispensabili per il funzionamento del sito. Sempre attivi.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Google Maps',
              description: 'Carica la mappa interattiva con la nostra posizione. Questo cookie permette a Google Maps di ricordare la tua sessione.',
              linkedCategory: 'maps'
            }
          ]
        }
      },
      de: {
        consentModal: {
          title: 'Wir verwenden Cookies',
          description: 'Wir verwenden Cookies nur, um die Google-Maps-Karte unten zu laden. Alles andere auf dieser Website funktioniert ohne Cookies.',
          acceptAllBtn: 'Akzeptieren',
          acceptNecessaryBtn: 'Ablehnen',
          showPreferencesBtn: 'Einstellungen verwalten',
          footer: '<a href="#location">Lage</a>'
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          savePreferencesBtn: 'Einstellungen speichern',
          closeIconLabel: 'Schließen',
          sections: [
            {
              title: 'Notwendig',
              description: 'Für die Funktion der Website erforderlich. Immer aktiv.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Google Maps',
              description: 'Lädt die interaktive Karte mit unserem Standort. Dieses Cookie merkt sich Ihre Google-Maps-Sitzung.',
              linkedCategory: 'maps'
            }
          ]
        }
      }
    }
  },
  onFirstConsent: updateMapEmbed,
  onConsent: updateMapEmbed,
  onChange: updateMapEmbed
});

document.getElementById('mapConsentBtn')?.addEventListener('click', () => {
  CookieConsent.showPreferences();
});
