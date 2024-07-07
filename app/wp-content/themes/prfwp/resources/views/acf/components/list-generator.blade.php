@set($component, ' acfm-list-' . get_sub_field('style'))

<style>
  .acfm-list-planets__image::after {
    border-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/Frame13.png')  round 1%;
  }
</style>

<ul
  class="acfm-{{App::layout()}}{{$component}}">
  @fields('list_generator')
  @set($customClass, get_sub_field('class'))


  @hassub('url')
  <a class="enableHash {{$customClass}}" href="@sub(url)"">
    @endsub

    <li class="{{$component}}__item">

      @hassub('svg')
      <div class="{{$component}}__icon icon-{{str_replace('.', '-', get_sub_field('svg'))}}">
        @include('svg.acf.' . get_sub_field('svg'))
      </div>
      @endsub

      @hassub('image')
      <div class="{{$component}}__image">
        <img class="acfm-image" src="@sub('image', 'url')" alt="@sub('image', 'alt')">
      </div>
      @endsub

      @hassub('number')
      <div class="{{$component}}__number">
        <h3 class="acfm-number">@sub('number')</h3>
      </div>
      @endsub

      <div class="li-br">
      @hassub('title')
      <div class="{{$component}}__title">
        @sub('title')
      </div>
      @endsub

      @hassub('text')
      <div class="{{$component}}__text">
        @sub('text')
      </div>
      @endsub
      </div>

      @hassub('svg2')
      <div class="{{$component}}__icon2 icon-{{str_replace('.', '-', get_sub_field('svg2'))}}">
        @include('svg.acf.' . get_sub_field('svg2'))
      </div>
      @endsub


    </li>

    @hassub('url')
  </a>
  @endsub






  @endfields
</ul>
