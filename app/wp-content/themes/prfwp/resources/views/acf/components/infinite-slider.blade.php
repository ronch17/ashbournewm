@php
  $infinite_slider = get_sub_field('gallery_field');
@endphp



@if($infinite_slider)
  <div class="gallery">
    <div class="mover-1">
    @foreach($infinite_slider as $image)

      <img src="{{ $image['url'] }}" alt="{{ $image['alt'] }}">

    @endforeach
    </div>
  </div>
@endif


