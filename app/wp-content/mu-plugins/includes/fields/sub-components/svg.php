<?php

namespace prfwp;

use StoutLogic\AcfBuilder\FieldsBuilder;

include PRFWP_PATH . "/includes/fields/partials/config.php";

$svg = new FieldsBuilder( 'svg', [ 'title' => 'SVG Icon' ] );

$svg
	->addSelect( 'svg', [ 'label' => 'SVG Icon', 'allow_null' => 1 ] )
	->setWidth( 25 )
	->addChoices(
		[ 'default' => 'Default Icon',
            'contact.medal' => 'Medal Icon',
            'dark-medal' => 'Dark Medal Icon',
            'white-medal' => 'White Medal Icon',
            'circled-dot' => 'Circled dot',
            'ac-bg' => 'Account Types Background',
            'dots.purple' => 'Purple Circled Dot',
            'dots.green' => 'Green Circled Dot',
            'dots.red' => 'Red Circled Dot',
            'dots.blue' => 'Blue Circled Dot',
            'dots.yellow' => 'Yellow Circled Dot',
            ]
	);

return $svg;
