#! /usr/bin/env ruby
require 'fileutils'

locales = {
  'Albanian' => 'sq-AL',
  'Arabic' => 'ar-SA',
  'Armenian' => 'hy-AM',
  'Azerbaijani' => 'az-AZ',
  'Basque' => 'eu-ES',
  'Bengali' => 'bn-BD',
  'Bosnian' => 'bs-BA',
  'Bulgarian' => 'bg-BG',
  'Catalan' => 'ca-ES',
  'Chinese Simplified' => 'zh-CN',
  'Chinese Traditional' => 'zh-TW',
  'Croatian' => 'hr-HR',
  'Czech' => 'cs-CZ',
  'Danish' => 'da-DK',
  'Dari' => 'fa-AF',
  'Dutch' => 'nl-NL',
  'English' => 'en-US',
  'English, United Kingdom' => 'en-GB',
  'Estonian' => 'et-EE',
  'Filipino' => 'fil-PH',
  'Finnish' => 'fi-FI',
  'French' => 'fr-FR',
  'Galician' => 'gl-ES',
  'Georgian' => 'ka-GE',
  'German' => 'de-DE',
  'Greek' => 'el-GR',
  'Hawaiian' => 'haw-HI',
  'Hebrew' => 'he-IL',
  'Hindi' => 'hi-IN',
  'Hungarian' => 'hu-HU',
  'Icelandic' => 'is-IS',
  'Indonesian' => 'id-ID',
  'Irish' => 'ga-IE',
  'Italian' => 'it-IT',
  'Japanese' => 'ja-JP',
  'Kazakh' => 'kk-KZ',
  'Khmer' => 'km-KH',
  'Korean' => 'ko-KR',
  'Kurdish' => 'ku-IQ',
  'Latvian' => 'lv-LV',
  'Lithuanian' => 'lt-LT',
  'Macedonian (FYROM)' => 'mk-MK',
  'Malay' => 'ms-MY',
  'Maltese' => 'mt-MT',
  'Maori' => 'mi-NZ',
  'Marathi' => 'mr-IN',
  'Nepali' => 'ne-NP',
  'Northern Sami' => 'se-FI',
  'Norwegian' => 'no-NO',
  'Norwegian Nynorsk' => 'nn-NO',
  'Pashto' => 'ps-AF',
  'Persian' => 'fa-IR',
  'Polish' => 'pl-PL',
  'Portuguese' => 'pt-PT',
  'Portuguese, Brazilian' => 'pt-BR',
  'Romanian' => 'ro-RO',
  'Russian' => 'ru-RU',
  'Serbian (Cyrillic)' => 'sr-SP',
  'Sinhala' => 'si-LK',
  'Slovak' => 'sk-SK',
  'Slovenian' => 'sl-SI',
  'Spanish' => 'es-ES',
  'Spanish, Argentina' => 'es-AR',
  'Spanish, Mexico' => 'es-MX',
  'Swedish' => 'sv-SE',
  'Tajik' => 'tg-TJ',
  'Tamil' => 'ta-IN',
  'Thai' => 'th-TH',
  'Turkish' => 'tr-TR',
  'Ukrainian' => 'uk-UA',
  'Urdu (Pakistan)' => 'ur-PK',
  'Uzbek' => 'uz-UZ',
  'Vietnamese' => 'vi-VN',
  'Zulu' => 'zu-ZA'
}

untranslated_apps = %w(
  applab
  calc
  eval
  gamelab
  netsim
  weblab
)

locales.each_value do |locale|
  next unless locale != 'en-US'
  untranslated_apps.each do |app|
    app_locale = locale.sub '-', '_'
    app_locale.downcase!
    FileUtils.cp_r "i18n/#{app}/en_us.json", "i18n/#{app}/#{app_locale}.json"
  end
end
