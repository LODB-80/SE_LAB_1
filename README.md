# شرح آزمایش اول درس آزمایشگاه مهندسی نرم افزار

در این آزمایش یک صفحۀ استاتیک برای پیاده سازی در نظر گرفتیم که شامل
سرآیند،بدنه و پانویس است.  
در مرحلۀ بعد تصمیم گرفتیم که 4 شاخۀ دیگر ایجاد کنیم که در تصویر زیر قابل مشاهده هستند:
![شاخه های ریپازیتوری](./images/1.png)
توضیحات این شاخه ها به شرح زیر است:

- feature/header: این شاخه برای ایجاد و توسعۀ سرآیند در نظر گرفته شده است.
- feature/body: این شاخه برای ایجاد و توسعۀ بدنه در نظر گرفته شده است.
- feature/footer: این شاخه برای توسعه و ایجاد پانویس در نظر گرفته شده است.
- dev: این شاخه نیز برای تغییرات کلی در ساختار برنامه و توسعۀ کلی این صفحه در نظر گرفته شده است که در ادامه سایر شاخه ها با این شاخه ادغام می شوند.

## حل conflict در App.js
در دو برنچ ایجاد شده‌ی متفاوت به <App/> کلاس‌های متفاوتی نسبت دادیم که پس از مرج این دو برنچ کانفلیکت پیش آمد.
در نهایت با حذف کلاس‌های کانفلیکت رفع شد.

## کانفلیکت رخ داده برای index.js
حین تغییرات ایجاد شده آدرس فایل تغییر کرده بود که پس از مرج کانفلیکت به وجد آورد.
برای رفع کانفلیکت فایل اضافه پاک شد و ایمپورت‌ها هم در صورت نیاز اصلاح شدند.

## شاخه feature/header
در این شاخه در ابتدا فایل Header.js اضافه شده و تغییراتی در آن ایجاد شده است. در مرحلۀ بعد استایل این کلاس در Header.css تعریف شده است و در نهایت پوشۀ /src/data اضافه شده تا که اطلاعات مورد نیاز در آن ذخیره شود.
البته لینک‌های موجود در header فعال نیستند و به صفحه‌ی اصلی لینک شده‌اند.


## شاخۀ feature/body

در این شاخه در ابتدا فایل `Body.js` اضافه شده و تغییراتی در آن ایجاد شده است. در مرحلۀ بعد استایل این کلاس در `Body.css` تعریف شده است و در نهایت پوشۀ `/src/data` اضافه شده تا که اطلاعات مورد نیاز در آن ذخیره شود. در این پوشه یک فایل به نام `users.json` وجود دارد که شامل اطلاعات اعضای گروه برای نمایش در صفحه است. کامیت های این شاخه به همراه توضیح دقیق هر کامیت در ریپو قابل مشاهده هستند.
