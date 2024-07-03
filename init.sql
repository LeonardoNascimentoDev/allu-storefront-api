DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db CHARACTER SET utf8 COLLATE utf8_general_ci;

USE products_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    technicalDetails VARCHAR(2000),
    annualValue DECIMAL(10, 2),
    photos VARCHAR(2000)
) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    photo VARCHAR(2000)
) CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO categories (category, photo)
VALUES
( 'Notebooks', 'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2BThumb.png'),
( 'Desktops', 'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2BThumb.png'),
( 'Smartwatches', 'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2BThumb.png'),
( 'Smartphones', 'https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2BThumb.png'),
( 'Games', 'https://v2-allugator-images.s3.amazonaws.com/products/PS5%2BThumb%20%281%29.png');

INSERT INTO products (name, category, technicalDetails, annualValue, photos)
VALUES
('Notebook Acer Nitro V RTX 3050 i5 8GB', 'Notebooks','Placa de video RTX 3050 com 6GB, Tela 15.6” Full HD - 144 Hertz, Capacidade 512GB SSD, Processador Intel Core i5 13ª geração, Memória RAM 8GB ANV15-51-57WS', 2508, '[https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2BThumb.png,https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B2.jpeg,https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B3.jpeg,https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B4.jpeg,https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B5.jpeg,https://v2-allugator-images.s3.amazonaws.com/products/Acer%2BNitro%2B5%2B3050%2B6.jpeg]'),
('Desktop Gamer Predator Orion RTX 3070','Desktops','NVIDIA® GeForce® RTX 3070 8 GB GDDR6 - 1TB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i7-11700 11ª geração - PO5-620-BR13', 2998.80, '[https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%201.png,https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.webp]'),
('Desktop Acer Orion I5 RTX 3060 16GB','Desktops','NVIDIA® GeForce® RTX 3060 12 GB GDDR6 - 512 GB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i5-11400 11ª geração - PO5-620-BR12', 3418.80, '[https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.png,https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.webp,https://v2-allugator-images.s3.amazonaws.com/products/allu.nv_specs-acer_orion%20i5%203060%2016GB_PO5-620-BR12_900x900px.png]'),
('Desktop Acer Orion I7 RTX 3060 16GB','Desktops', 'NVIDIA® GeForce® RTX 3060 12 GB GDDR6 - 1 TB SSD - 16 GB DDR4 3200mhz - Intel® Core™ i7-11700 11ª geração - PO5-620-BR15', 2638.80, '[https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%203.png,https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.webp,https://v2-allugator-images.s3.amazonaws.com/products/allu.nv_specs-acer_orion%20i7%203060%2016GB_PO5-620-BR15_900x900px.png]'),
('Desktop Acer Orion I7 RTX 3080 32GB Linux','Desktops', 'NVIDIA® GeForce® RTX 3080 10 GB GDDR6 - 1 TB SSD - 32 GB RAM - Intel® Core™ i7-11700 11ª geração - PO5-620-BR14', 3058.80, '[https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%201.webp,https://v2-allugator-images.s3.amazonaws.com/products/acer%20orion%202.webp]'),
('Notebook Acer Vero i5 16GB 512GB','Notebooks','Processador Intel Core i5 11a gen, 16GB Memória RAM 512GB SSD', 1678.80, '[https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%201.webp,https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%202.webp,https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%203.webp,https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%204.webp,https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%205.webp,https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%206.webp,https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%207.webp,https://v2-allugator-images.s3.amazonaws.com/products/acer%20vero%208.webp]'),
('Notebook Acer Predator Helios Neo RTX 4060 i7 16GB','Notebooks', 'Placa de video RTX 4060, Tela: 16” - 165 Hertz, Capacidade 1TB SSD, Memória RAM 16GB, Processador Intel Core i7 13ª geração', 3828.01, '[https://v2-allugator-images.s3.amazonaws.com/products/acer%20helios%20neo%20phn16-71-74ue.png]'),
('Notebook Acer Predator Triton RTX 3060 i7 16GB','Notebooks', 'Placa de video RTX 3060, Tela 16” Capacidade 512GB SSD, Memória RAM 16GB, Processador Intel Core i7 12º geração', 3948.01, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/ACER+PREDATOR+300+SE/Acer+Predator+300+SE+Thumb.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/ACER+PREDATOR+300+SE/Acer+Predator+300+SE+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/ACER+PREDATOR+300+SE/Acer+Predator+300+SE+3.jpg,https://v2-allugator-images.s3.amazonaws.com/products/allu.nv_specs-acer_triton_PT316-51s-72XA_900x900px.png]'),
('POLAR Pacer Pro + Assessoria','Smartwatches', 'Relógio Esportivo com GPS avançado', 3348, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+Thumb+2.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+3.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+4.jpg]'),
('POLAR Pacer + Assessoria','Smartwatches', 'Relógio Esportivo com GPS', 2868, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+3.jpg]'),
('POLAR Pacer Pro', 'Smartwatches','Relógio Esportivo com GPS avançado', 1608, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+Thumb+2.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+3.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER+PRO/Polar+Pacer+Pro+4.jpg]'),
('POLAR Pacer','Smartwatches', 'Relógio Esportivo com GPS', 1128, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+Thumb+2.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/POLAR+PACER/Polar+Pacer+3.jpg]'),
('iPhone 15 Pro Max 256GB','Smartphones', 'Chip A17 Pro com GPU de 6 núcleos', 4558.87, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO+MAX/iPhone+15+Pro+Max+Thumb.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO+MAX/iPhone+15+Pro+Max+-+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO+MAX/iPhone+15+Pro+Max+-+3.jpg]'),
('iPhone 15 Pro 128GB','Smartphones', 'Chip A17 Pro com GPU de 6 núcleos', 3958.86, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO/iPhone+15+Pro+Thumb.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO/iPhone+15+Pro+-+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15+PRO/iPhone+15+Pro+-+3.jpg]'),
('iPhone 15 128GB','Smartphones', 'Chip A16 Bionic com GPU de 5 núcleos - Sistema avançado de câmera dupla', 3118.80, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15/iPhone+15+Thumb.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15/iPhone+15++-+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+15/iPhone+15++-+3.jpg]'),
('iPhone 14 Pro 128GB','Smartphones', '6.1 polegadas, A15 Bionic, Super Retina XDR OLED, Ceramic Glass, Câmera tripla, grande angular, ultra grande angular, telefoto + sensor LiDAR, 5G', 3238.80, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+Thumb.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+-+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+-+3.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14+PRO/iPhone+14+Pro+-+4.jpg]'),
('iPhone 14 Pro Max 128GB','Smartphones', 'Tela - LTPO Super Retina XDR OLED, Tamanho 6.7, Resolução 2796 x 1290, Densidade 460 ppi, Proteção Scratch-resistant ceramic glass, oleophobic coating, Extras Always-on display, Dolby Vision, 120Hz e HDR 10 Plus, CPU Hexa-core (2x3.46 GHz Avalanche e 4x Blizzard)', 3718.87, '[https://v2-allugator-images.s3.amazonaws.com/products/iPhone%2B14%2BPro%2BMax.png]'),
('iPhone 14 128GB','Smartphones', '6.1 polegadas, A15, Super Retina XDR OLED, Ceramic Shield, Câmera dupla, grande angular, ultra grande angular, telefoto + sensor proximidade, 5G', 2362.80, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14+Thumb.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14++-+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14++-+3.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+14/iPhone+14++-+4.jpg]'),
('iPhone 13 128GB','Smartphones', '6.1 polegadas, A15 Bionic, Super Retina XDR OLED, Ceramic Glass, Câmera dupla, grande angular, ultra grande angular, 5G', 2218.80, '[https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+13/iPhone+13+Thumb.png,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+13/iPhone+13+-+2.jpg,https://yacare-products-image.s3.sa-east-1.amazonaws.com/new-site/IPHONE+13/iPhone+13+-+3.jpg]'),
('Playstation 5','Games', '4K, SSD, 825 Gb de armazenamento livre e PSN Essential inclusa', 2099, '[https://v2-allugator-images.s3.amazonaws.com/products/PS5%2BThumb%20%281%29.png,https://v2-allugator-images.s3.amazonaws.com/products/2.jpeg,https://v2-allugator-images.s3.amazonaws.com/products/3.jpeg,https://v2-allugator-images.s3.amazonaws.com/products/4.jpeg,https://v2-allugator-images.s3.amazonaws.com/products/5.jpeg]');

