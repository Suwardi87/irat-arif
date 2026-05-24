import { ref, computed } from 'vue'

type Locale = 'id' | 'en'

const translations: Record<Locale, Record<string, string>> = {
  id: {
    'bismillah': 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم',
    'bismillah.translate': 'Dengan Nama Allah Yang Maha Pengasih Lagi Maha Penyayang',
    'salam': 'Assalamu\'alaikum Warahmatullahi Wabarakatuh',
    'guest.to': 'Kepada Yth.',
    'guest.fallback': 'Bapak/Ibu/Saudara/i',
    'btn.open': 'Buka Undangan',
    'loading': 'Memuat Undangan...',
    'section.story': 'Cerita Kami',
    'section.mempelai': 'Mempelai',
    'section.acara': 'Rangkaian Acara',
    'section.lokasi': 'Lokasi Acara',
    'section.guestbook': 'Ucapan & Doa',
    'section.gift': 'Amplop Digital',
    'section.rsvp': 'Konfirmasi Kehadiran',
    'mempelai.intro': 'Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:',
    'mempelai.putri': 'Putri dari',
    'mempelai.putra': 'Putra dari',
    'countdown.label': 'Menuju Hari Bahagia',
    'countdown.hari': 'Hari',
    'countdown.jam': 'Jam',
    'countdown.menit': 'Menit',
    'countdown.detik': 'Detik',
    'maps.btn': 'Buka Google Maps',
    'guestbook.intro': 'Berikan ucapan dan doa terbaik untuk kedua mempelai',
    'guestbook.wishes': 'Ucapan',
    'guestbook.attending': 'Hadir',
    'guestbook.name': 'Nama Anda',
    'guestbook.message': 'Tulis ucapan dan doa Anda...',
    'guestbook.attendance': 'Konfirmasi Kehadiran',
    'guestbook.hadir': 'Hadir',
    'guestbook.tidak': 'Tidak Hadir',
    'guestbook.ragu': 'Ragu',
    'guestbook.submit': 'Kirim Ucapan',
    'guestbook.success': 'Terima kasih! Ucapan Anda telah terkirim.',
    'gift.intro': 'Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.',
    'gift.bank': 'Transfer Bank',
    'gift.ewallet': 'E-Wallet',
    'gift.copy': 'Salin',
    'gift.copied': 'Tersalin!',
    'gift.qris': 'Scan QR code di aplikasi e-wallet Anda untuk transfer mudah',
    'gift.thanks': 'Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.',
    'rsvp.text': 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.',
    'rsvp.question': 'Kehadiran Anda sangat kami nantikan',
    'rsvp.btn': 'Konfirmasi via WhatsApp',
    'rsvp.hint': 'Klik tombol di atas untuk mengirim konfirmasi',
    'rsvp.thanks': 'Terima Kasih!',
    'rsvp.thanks.text': 'Mohon konfirmasi kehadiran Anda via WhatsApp',
    'closing.thank': 'Wa Assalamu\'alaikum Warahmatullahi Wabarakatuh',
    'footer.made': 'Dibuat dengan ❤️ untuk',
    'footer.tagline': 'Maranak Minang',
    'back.top': 'Kembali ke atas',
    'lang': 'EN'
  },
  en: {
    'bismillah': 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم',
    'bismillah.translate': 'In the Name of Allah, the Most Gracious, the Most Merciful',
    'salam': 'Assalamu\'alaikum Warahmatullahi Wabarakatuh',
    'guest.to': 'Honorable',
    'guest.fallback': 'Mr./Mrs./Brother/Sister',
    'btn.open': 'Open Invitation',
    'loading': 'Loading Invitation...',
    'section.story': 'Our Story',
    'section.mempelai': 'The Couple',
    'section.acara': 'Events',
    'section.lokasi': 'Venue',
    'section.guestbook': 'Wishes',
    'section.gift': 'Digital Gift',
    'section.rsvp': 'RSVP',
    'mempelai.intro': 'By the grace and mercy of Allah SWT, we intend to hold the wedding of our children:',
    'mempelai.putri': 'Daughter of',
    'mempelai.putra': 'Son of',
    'countdown.label': 'Counting Down to Our Day',
    'countdown.hari': 'Days',
    'countdown.jam': 'Hours',
    'countdown.menit': 'Minutes',
    'countdown.detik': 'Seconds',
    'maps.btn': 'Open Google Maps',
    'guestbook.intro': 'Share your best wishes and prayers for the couple',
    'guestbook.wishes': 'Wishes',
    'guestbook.attending': 'Attending',
    'guestbook.name': 'Your Name',
    'guestbook.message': 'Write your wishes and prayers...',
    'guestbook.attendance': 'Attendance Confirmation',
    'guestbook.hadir': 'Attending',
    'guestbook.tidak': 'Not Attending',
    'guestbook.ragu': 'Maybe',
    'guestbook.submit': 'Send Wishes',
    'guestbook.success': 'Thank you! Your wish has been sent.',
    'gift.intro': 'Your prayers mean the world to us. If you wish to give a token of love, we have provided a digital envelope.',
    'gift.bank': 'Bank Transfer',
    'gift.ewallet': 'E-Wallet',
    'gift.copy': 'Copy',
    'gift.copied': 'Copied!',
    'gift.qris': 'Scan QR code with your e-wallet app for easy transfer',
    'gift.thanks': 'It is our honor and happiness if you would grace us with your presence and prayers.',
    'rsvp.text': 'It would be an honor and happiness for us if you would attend and give your blessings.',
    'rsvp.question': 'Your presence is highly anticipated',
    'rsvp.btn': 'Confirm via WhatsApp',
    'rsvp.hint': 'Click the button above to send confirmation',
    'rsvp.thanks': 'Thank You!',
    'rsvp.thanks.text': 'Please confirm your attendance via WhatsApp',
    'closing.thank': 'Wa Assalamu\'alaikum Warahmatullahi Wabarakatuh',
    'footer.made': 'Made with ❤️ for',
    'footer.tagline': 'Maranak Minang',
    'back.top': 'Back to top',
    'lang': 'ID'
  }
}

const currentLocale = ref<Locale>((localStorage.getItem('wedding-locale') as Locale) || 'id')

export function useI18n() {
  const locale = computed(() => currentLocale.value)

  function t(key: string): string {
    return translations[currentLocale.value]?.[key] || translations['id']?.[key] || key
  }

  function toggleLocale() {
    currentLocale.value = currentLocale.value === 'id' ? 'en' : 'id'
    localStorage.setItem('wedding-locale', currentLocale.value)
    document.documentElement.lang = currentLocale.value
  }

  function setLocale(loc: Locale) {
    currentLocale.value = loc
    localStorage.setItem('wedding-locale', loc)
    document.documentElement.lang = loc
  }

  return {
    locale,
    t,
    toggleLocale,
    setLocale,
    isId: computed(() => currentLocale.value === 'id'),
    isEn: computed(() => currentLocale.value === 'en')
  }
}
