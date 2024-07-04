@php
  $planets = get_sub_field('gallery_field');
@endphp

@set($component, 'acfm-'. App::layout())


@if($planets)
  <div class="{{$component}}">
      @foreach($planets as $image)

        <img class="{{$component}}-img" src="{{ $image['url'] }}" alt="{{ $image['alt'] }}">

      @endforeach

  </div>
@endif


