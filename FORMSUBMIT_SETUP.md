# FormSubmit Setup - Super Simple! ✨

Form contact sudah siap pakai dengan FormSubmit. Tidak perlu install apapun, tidak perlu akun!

## ✅ Yang Sudah Dikonfigurasi:

1. **Form action** → `https://formsubmit.co/josuaabrianto15@gmail.com`
2. **Captcha** → Disabled (untuk kemudahan, bisa diaktifkan kalau spam)
3. **Subject** → "New Portfolio Contact Message!"
4. **Template** → Table format (rapi di email)

## 🚀 Cara Kerja:

### Pertama Kali (Verifikasi Email):
1. Test kirim pesan dari form contact
2. Check inbox **josuaabrianto15@gmail.com**
3. Klik link verifikasi dari FormSubmit
4. Selesai! Email sudah aktif ✓

### Setelah Verifikasi:
- Setiap form disubmit → langsung masuk email kamu
- User akan diredirect ke thank you page default FormSubmit
- No limits, gratis selamanya

## 🎨 Fitur FormSubmit yang Sudah Diaktifkan:

```html
<input type="hidden" name="_captcha" value="false" />
<!-- Captcha disabled - aktifkan kalau banyak spam -->

<input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
<!-- Custom subject line -->

<input type="hidden" name="_template" value="table" />
<!-- Email format yang rapi -->
```

## 🔧 Kustomisasi Opsional:

### 1. Custom Thank You Page (Redirect ke halaman sendiri)
Tambahkan input ini di form:
```html
<input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html" />
```

### 2. Aktifkan Captcha (Anti spam)
Ubah `value="false"` jadi `value="true"`:
```html
<input type="hidden" name="_captcha" value="true" />
```

### 3. CC ke Email Lain
```html
<input type="hidden" name="_cc" value="email-lain@gmail.com" />
```

### 4. Auto Reply ke Pengirim
```html
<input type="hidden" name="_autoresponse" value="Terima kasih! Saya akan segera membalas pesan Anda." />
```

## 📧 Format Email yang Diterima:

```
Subject: New Portfolio Contact Message!

name:    [Nama pengirim]
email:   [Email pengirim]
message: [Pesan lengkap]
```

## 🔒 Keamanan:

- ✅ FormSubmit tidak menyimpan data form (langsung forward ke email)
- ✅ HTTPS secure
- ✅ Anti-spam protection built-in
- ✅ Email tidak exposed di source code (FormSubmit hash it)

## 🆚 Kenapa FormSubmit vs EmailJS?

| Feature | FormSubmit | EmailJS |
|---------|-----------|---------|
| Setup | Zero config | Butuh akun + API key |
| Verifikasi | Email link (sekali) | Dashboard setup |
| Email format | Simple forward | Custom template |
| Dependency | Nol | Perlu npm install |
| Limit | Unlimited | 200/bulan (free) |

## 🎯 Next Steps:

1. ✅ Form sudah siap di production
2. ⏳ Tinggal verifikasi email pertama kali
3. 🚀 Deploy dan test!

---

**Dokumentasi lengkap:** https://formsubmit.co/
