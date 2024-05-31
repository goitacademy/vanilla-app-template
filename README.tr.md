# Vanilla App Template

Bu proje Vite kullanılarak oluşturulmuştur. Ek özelliklerin tanınması ve özelleştirilmesi için [belgelere bakın](https://vitejs.dev/).

## Şablon kullanarak bir depo oluşturma

Projeniz için bir depo oluşturmak üzere bu GoIT deposunu şablon olarak kullanın. Bunu yapmak için, `«Use this template»` düğmesine tıklayın ve resimde gösterildiği gibi `«Create a new repository»` seçeneğini seçin.

![Creating repo from a template step 1](./assets/template-step-1.png)

Bir sonraki adımda yeni bir depo oluşturma sayfası açılır. Ad alanını doldurun, deponun herkese açık olduğundan emin olun ve ardından `«Create repository from template»` düğmesine tıklayın.

![Creating repo from a template step 2](./assets/template-step-2.png)

Depo oluşturulduktan sonra, oluşturulan deponun ayarlarına, resimde gösterildiği gibi `Settings` > `Actions` > `General` sekmesine gitmeniz gerekir.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Sayfanın en sonuna gidin, `«Workflow permissions»` bölümünde `«Read and write permissions»` seçeneğini seçin ve onay kutusunu işaretleyin. Bu, proje dağıtımı sürecini otomatikleştirmek için gereklidir.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Artık depo şablonu dosyası ve klasör yapısına sahip kişisel bir proje deponuz var. Daha sonra diğer kişisel depolarla yaptığınız gibi onunla çalışın.
Bilgisayarınıza klonlayın, kod yazın, taahhütlerde bulunun ve bunları GitHub'a gönderin.


## İş için hazırlanma

1. Bilgisayarınızda Node.js'nin LTS sürümünün yüklü olduğundan emin olun. Gerekirse [Download and install](https://nodejs.org/en/).
2. Projenin temel bağımlılıklarını terminalde `npm install` komutu ile yükleyin.
3. Terminalde `npm run dev` komutunu çalıştırarak geliştirme modunu başlatın.
4. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresine gidin. Proje dosyalarındaki değişiklikleri kaydettikten sonra bu sayfa otomatik olarak yeniden yüklenecektir.

## Dosyalar ve klasörler

- Sayfa bileşeni biçimlendirme dosyaları `rc/partials` klasöründe bulunmalı ve `index.html` dosyasına aktarılmalıdır. Örneğin, başlık biçimlendirme dosyası `header.html` `partials` klasöründe oluşturulur ve `index.html` dosyasına aktarılır.
- Stil dosyaları `rc/css` klasöründe bulunmalı ve sayfaların HTML dosyalarına aktarılmalıdır. Örneğin, `index.html` için stil dosyası `index.css` olarak adlandırılır.
- Görüntüleri `src/img` klasörüne eklersiniz. Oluşturucu bunları optimize eder, ancak yalnızca projenin üretim sürümü dağıtıldığında. Tüm bunlar bulutta gerçekleşir, böylece bilgisayarınıza yük olmaz, çünkü zayıf makinelerde uzun zaman alabilir.


## Dağıtım

Projenin üretim sürümü, `main` dalı her güncellendiğinde otomatik olarak oluşturulacak ve `gh-pages` dalında GitHub Pages'a dağıtılacaktır. Örneğin, doğrudan bir push veya kabul edilen bir pool-request sonrasında. Bunu yapmak için `build` komutu için `package.json` dosyasındaki `--base=/<REPO>/` bayrağının değerini değiştirin, `<REPO>` yerine deponuzun adını yazın ve değişiklikleri GitHub'a gönderin.

```json
"build": "vite build --base=/<REPO>/",
```

Ardından, GitHub depo ayarlarına gidin (`Settings` > `Pages`) ve otomatik olarak yapılmadıysa, dosyaların üretim sürümünün `gh-pages` dalının `/root` klasöründen dağıtımını ayarlayın.

![GitHub Pages settings](./assets/repo-settings.png)

### Dağıtımcı durumu

Son işlemin dağıtım durumu, tanımlayıcısının yanındaki simge ile gösterilir.

- **Sarı renk** — proje inşa ediliyor ve dağıtılıyor.
- **Yeşil renk** — dağıtım başarıyla tamamlandı.
- **Kırmızı renk** — bağlama, oluşturma veya dağıtma sırasında bir hata oluştu.

Durum hakkında daha ayrıntılı bilgi, simgeye tıklayarak ve açılan pencerede `Details` bağlantısına tıklayarak görüntülenebilir.


![Deployment status](./assets/deploy-status.png)

### Canlı sayfa

Bir süre sonra, genellikle birkaç dakika, canlı sayfa depo ayarlarındaki `Settings` > `Pages` sekmesinde belirtilen adresten görüntülenebilir.
Örneğin, bu depo için canlı sürümün bağlantısı şöyledir
[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).


Boş bir sayfa açılırsa, `Console` sekmesinde projenin CSS ve JS dosyalarının yanlış yollarıyla ilgili herhangi bir hata olmadığından emin olun (**404**). Büyük olasılıkla `package.json` dosyasında `build` komutu için `--base` bayrağının yanlış bir değeri vardır.

## Nasıl çalışır

![How it works](./assets/how-it-works.png)

1. GitHub deposuna yapılan her `main` gönderim sonrasında `.github/workflows/deploy.yml` 
dosyasında özel bir komut dosyası (GitHub Action) çalıştırılır.
2. Depo dosyalarının tümü sunucuya kopyalanır, burada proje başlatılır ve dağıtımdan önce 
kod kalitesi kontrolü ve derleme yapılır.
3. Eğer tüm adımlar başarılı bir şekilde tamamlanırsa, proje dosyalarının üretime hazır sürümü `gh-pages` 
dalına gönderilir. Aksi takdirde, komut dosyası çalıştırma günlüğünde sorunun ne olduğu belirtilir.
