# Require any additional compass plugins here.

http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
relative_assets = false
sass_options = {:debug_info=>false}

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
line_comments = true


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss
fireapp_coffeescripts_dir = "coffeescripts"
fireapp_coffeescript_options = {:bare=>true}
fireapp_livescripts_dir = "livescripts"
fireapp_livescript_options = {:bare=>false}
fireapp_minifyjs_on_build = false
fireapp_always_report_on_build = true
sass_options = {:debug_info=>false}
