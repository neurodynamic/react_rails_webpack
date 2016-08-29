# I can't figure out a cleaner way to get font compilation
# to work than copying the compiled font files into the public
# directory. Without this copying step, the font filenames
# in the Webpack-generated CSS file won't match the filenames
# of the actual font files. Hoping for a better solution to
# this in the future.

require 'fileutils'

font_files = Dir.glob('../app/assets/webpack/*.{otf,eot,svg,ttf,woff,woff2}')
puts "Copying #{font_files.inspect} to public folder..."

FileUtils.cp font_files, '../public/'
