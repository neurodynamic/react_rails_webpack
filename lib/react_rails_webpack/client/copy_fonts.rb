require 'fileutils'

font_files = Dir.glob('../app/assets/webpack/*.{otf,eot,svg,ttf,woff,woff2}')
puts "Copying #{font_files.inspect} to public folder..."

FileUtils.cp font_files, '../public/'
