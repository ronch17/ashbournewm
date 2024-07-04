@set($component, 'acfm-'. App::layout())

<ul class="{{$component}}">
  @fields('accordion')
  <li class="{{$component}}-item">

    @hassub('svg')
    <div class="{{$component}}-header">
      <div class="{{$component}}-header__content">
        @include('svg.acf.' . get_sub_field('svg'))

      @endsub

      @hassub('title')

      <div class="{{$component}}__title">
        @sub('title')
      </div>
      </div>
      @endsub
      <div class="{{$component}}-arrow">
        @svg(arrow-up)
      </div>
    </div>

    <div class="{{$component}}-content">
      @hassub('text')
      <div class="{{$component}}__text">
        <p>@sub('text')</p>
      </div>
      @endsub
    </div>
  </li>

  @endfields
</ul>
