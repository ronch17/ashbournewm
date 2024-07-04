@acfmodule(div)
<a class="acfm-{{App::layout()}}__link" href="{{ home_url(App::homeURL()) }}"
   title="{{ get_bloginfo('name', 'display') }}">
  @svg(footer-logo)
</a>
@endacfmodule(div)
