@acfmodule(div)
@set($component, 'acfm-'. App::layout())

@hassub('video')
<video width="250" height="250" playsinline autoplay preload="none" loop
       poster="@sub('video', 'url')">
  <source type="webp"
          src="@sub('video', 'url')"
          data-src="@sub('video', 'url')">
</video>
@endsub()

@endacfmodule(div)
