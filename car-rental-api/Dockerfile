# Dockerfile

# <<<<<<<<<<Start: PHP-FPM Image Target>>>>>>>>>>#
FROM php:8.2-fpm as php

# Installer des dépendances système et des extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpq-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_pgsql

# Installer Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /srv/app

# Copier les fichiers du projet dans le conteneur
COPY . /srv/app

# Installer les dépendances Symfony
RUN composer install --prefer-dist --no-scripts --no-progress --no-interaction

# <<<<<<<<<<End: PHP-FPM Image Target>>>>>>>>>>#


# <<<<<<<<<<Start: PHP Dev Image>>>>>>>>>>#
FROM php as php_dev

# Installer Xdebug pour le développement
RUN pecl install xdebug && docker-php-ext-enable xdebug

# Copier l'application depuis l'image précédente
COPY --from=php /srv/app /srv/app

# <<<<<<<<<<End: PHP Dev Image>>>>>>>>>>#
