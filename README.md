# BTKAkademi-TestOtomasyonu
This repository includes test sample studies  by BTK Akademi 

## Selenium Standalone Server : 
Genellikle WebDriver'ı kullanarak tarayıcı otomasyonu gerçekleştirmek için kullanılan bağımsız bir sunucudur. Java, Python, 
JavaScript gibi çeşitli dillerde kullanılabilir.
- Grid ile kullanılarak testleri uzaktaki makinelerde veya farklı ortamlarda çalıştırmaya,
- Aynı anda birden fazla tarayıcada paralel test yapmaya,
- Farklı makineler üzerindeki testleri koordine etmeye
olanak tanır.

#### selenium-standalone paketini projeye ekle:
`npm install selenium-standalone --save-dev`

#### Selenium Standalone Server'ı kur:
`npx selenium-standalone install`

#### Selenium Server'ı başlat:
`npx selenium-standalone start` 

#### CodeceptJS test framework'ünü projeye kur:
`npm install conceptjs`

#### CodeceptJS için temel yapılandırma dosyalarını oluştur:
`npx conceptjs init`

#### @tag ile taglenmiş seneryoyu çalıştır: 
`npx conceptjs run --grep "@testcase1"`
