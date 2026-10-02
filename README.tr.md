# Vanilla App Template

Bu proje Vite kullanılarak oluşturulmuştur. Ek özelliklerin tanınması ve özelleştirilmesi için [belgelere bakın](https://vitejs.dev/).

## Şablon kullanarak bir depo oluşturma

Projeniz için bir depo oluşturmak üzere bu depoyu şablon olarak kullanın. Bunu yapmak için, `«Use this template»` düğmesine tıklayın ve resimde gösterildiği gibi `«Create a new repository»` seçeneğini seçin.

![Creating repo from a template step 1](./assets/template-step-1.png)

Bir sonraki adımda yeni bir depo oluşturma sayfası açılır. Ad alanını doldurun, deponun herkese açık olduğundan emin olun ve ardından `«Create repository from template»` düğmesine tıklayın.

![Creating repo from a template step 2](./assets/template-step-2.png)

Depo oluşturulduktan sonra onun için GitHub Pages'i etkinleştirin: `Settings` > `Pages` bölümüne gidin ve `Build and deployment` kısmında `Source` → `GitHub Actions` seçeneğini seçin. Bu, tek seferlik bir ayardır.

![GitHub Pages: Source → GitHub Actions](./assets/repo-settings.jpg)

Artık depo şablonu dosyası ve klasör yapısına sahip kişisel bir proje deponuz var. Daha sonra diğer kişisel depolarla yaptığınız gibi onunla çalışın.
Bilgisayarınıza klonlayın, kod yazın, taahhütlerde bulunun ve bunları GitHub'a gönderin.

## İş için hazırlanma

1. Bilgisayarınızda Node.js'nin LTS sürümünün yüklü olduğundan emin olun. Gerekirse [Download and install](https://nodejs.org/en/).
2. Projenin temel bağımlılıklarını terminalde `npm install` komutu ile yükleyin.
3. Terminalde `npm run dev` komutunu çalıştırarak geliştirme modunu başlatın.
4. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresine gidin. Proje dosyalarındaki değişiklikleri kaydettikten sonra bu sayfa otomatik olarak yeniden yüklenecektir.

## Dosyalar ve klasörler

- Kendi JavaScript kodunu `src/main.js` dosyasına ve gerektiğinde oluşturacağın diğer dosyalara yaz.
- Sayfa bileşeni biçimlendirme dosyaları `src/partials` klasöründe bulunmalı ve `index.html` dosyasına aktarılmalıdır. Örneğin, başlık biçimlendirme dosyası `header.html` `partials` klasöründe oluşturulur ve `index.html` dosyasına aktarılır.
- Stil dosyaları `src/css` klasöründe bulunmalı ve sayfaların HTML dosyalarına bağlanmalıdır. Örneğin, `index.html` `./css/styles.css` dosyasını bağlar.
- Görüntüleri `src/img` klasörüne eklersiniz. Oluşturucu bunları optimize eder, ancak yalnızca projenin üretim sürümü dağıtıldığında. Tüm bunlar bulutta gerçekleşir, böylece bilgisayarınıza yük olmaz, çünkü zayıf makinelerde uzun zaman alabilir.

## Dağıtım

Sayfanın canlı sürümü otomatik olarak güncellenir: proje dosyalarını her değiştirip değişiklikleri GitHub'da `main` dalına gönderdiğinde (doğrudan push ile veya kabul edilen bir pull request ile), proje kendini yeniden derler ve GitHub Pages'te yayımlar.

### Dağıtım durumu

Son işlemin dağıtım durumu, tanımlayıcısının yanındaki simge ile gösterilir.

- **Sarı renk** — proje inşa ediliyor ve dağıtılıyor.
- **Yeşil renk** — dağıtım başarıyla tamamlandı.
- **Kırmızı renk** — oluşturma veya dağıtma sırasında bir hata oluştu.

Durum hakkında daha ayrıntılı bilgi, simgeye tıklayarak ve açılan pencerede `Details` bağlantısına tıklayarak görüntülenebilir.

![Deployment status](./assets/deploy-status.png)

### Canlı sayfa

Bir süre sonra, genellikle birkaç dakika içinde, canlı sayfa senin deponun `Settings` > `Pages` sekmesinde belirtilen adresten görüntülenebilir. Örneğin, bu şablon deposunun canlı sürümünün bağlantısı şöyledir — sende kendi bağlantın olacak:

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Boş bir sayfa açılırsa, GitHub Pages'in etkin olduğundan (`Settings` > `Pages`) ve `Actions` sekmesindeki son dağıtımın başarıyla (yeşil) tamamlandığından emin ol.

## Nasıl çalışır

![How it works](./assets/how-it-works.png)

Kaputun altında: `main` dalına push yapıldıktan sonra `.github/workflows/deploy.yml` dosyasındaki bir GitHub Action çalışır, projeyi derler ve GitHub Pages'te yayımlar. Bir şeyler ters giderse — ayrıntılar `Actions` sekmesinde.
