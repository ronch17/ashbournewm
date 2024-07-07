@set($component, 'acfm-'. App::layout())

<style>
  .acfm-account-types li[title='Lunar'] {
    background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/cards/purple.png');
  }

   .acfm-account-types  li[title='Stellar'] {
    background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/cards/green.png');'
  }
   .acfm-account-types  li[title='Celestia'] {
    background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/cards/red.png');'
  }
   .acfm-account-types  li[title='Galaxy'] {
    background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/cards/blue.png');'
  }
   .acfm-account-types  li[title='SuperVoid'] {
    background-image:url('<?php echo get_template_directory_uri(); ?>/assets/images/cards/yellow.png');'
  }
</style>

<div class="{{$component}}-wrapper">

  <ul class="{{$component}}">
    @fields('account_types')

    @php
      $title =  get_sub_field('title') ? get_sub_field('title') : '';
      $subtitle = get_sub_field('sub-title') ? get_sub_field('sub-title') : '';
      $titleMobile = explode(' ',(trim($title)));
      $popular = get_sub_field('popular') ? ' popular' : '';
      $svg = get_sub_field('svg');
    @endphp

    <li title="{{$titleMobile[0]}}"
        class="{{$component}}__item {{strtolower(str_replace(' ', '-', get_sub_field('title')))}}{{$popular}}">
      <div class="{{$component}}__item__container">

        @hassub('popular')
        <p class="{{$component}}__popular">
          {{_e('Most Popular Choice', 'sage')}}
        </p>
        @endsub

        @hassub('svg')
        <div class="{{$component}}__svg">
          @include('svg.acf.' . get_sub_field('svg'))
        </div>
        @endsub

        @hassub('title')
        <div class="{{$component}}__title">
          @sub('title')
        </div>
        @endsub

        @hassub('sub-title')
        <div class="{{$component}}__subtitle">
          @sub('sub-title')
        </div>
        @endsub

        <ul class="{{$component}}__fields">
          @fields('field')

          <li class="{{$component}}__value">
            @hassub('value')
            @if(strtolower(get_sub_field('value')) == 'v')
              @svg(check)
            @elseif(strtolower(get_sub_field('value')) == 'x')
              @svg(x)
            @elseif(strtolower(get_sub_field('value')) == 'arr')
              @svg(arrow)
            @else
              @sub('value')
            @endif
            @endsub

            @hassub('text')
            <h3 class="{{$component}}__text">
              @sub('text')
            </h3>
            @endsub
          </li>




          @endfields
        </ul>

        <div class="{{$component}}__buttons">
          <div class="{{$component}}__button">
            @include('acf.sub-components.button')
          </div>
        </div>

      </div>

    </li>
    @endfields
  </ul>
</div>
