<?php 

header('content-type=> application/json; charset=utf-8');

	$directory = array(
            array("id"=>1,  "t"=>"dir", "shopname"=>"Gramedia",     "phone"=>"212-999-8887", "category"=> "books","floor"=>"GF", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>2,  "t"=>"dir", "shopname"=>"Zara",         "phone"=>"212-999-8887", "category"=> "fashion","floor"=>"GF", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>3,  "t"=>"dir", "shopname"=>"Sogo",         "phone"=>"212-999-8887", "category"=> "general","floor"=>"LGF", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>4,  "t"=>"dir", "shopname"=>"Food Hall",    "phone"=>"212-999-8887", "category"=> "general","floor"=>"2F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>5,  "t"=>"dir", "shopname"=>"Pizza Hut",    "phone"=>"212-999-8887", "category"=> "food","floor"=>"2F", "location"=>"N12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>6,  "t"=>"dir", "shopname"=>"JolliBee",     "phone"=>"212-999-8887", "category"=> "food","floor"=>"2F", "location"=>"B16", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>7,  "t"=>"dir", "shopname"=>"JCo Donut",    "phone"=>"212-999-8887", "category"=> "food","floor"=>"1F", "location"=>"B17", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>8,  "t"=>"dir", "shopname"=>"Next",         "phone"=>"212-999-8887", "category"=> "fashion","floor"=>"1F", "location"=>"B18", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>9,  "t"=>"dir", "shopname"=>"Duck King",    "phone"=>"212-999-8887", "category"=> "food","floor"=>"1F", "location"=>"C12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>11, "t"=>"dir", "shopname"=>"Starbuck",     "phone"=>"212-999-8887", "category"=> "food","floor"=>"1F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>12, "t"=>"dir", "shopname"=>"Studio XXI",   "phone"=>"212-999-8887", "category"=> "entertainment","floor"=>"1F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>13, "t"=>"dir", "shopname"=>"Ace Hardware", "phone"=>"212-999-8887", "category"=> "home","floor"=>"1F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>14, "t"=>"dir", "shopname"=>"Informa",      "phone"=>"212-999-8887", "category"=> "home","floor"=>"3F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>15, "t"=>"dir", "shopname"=>"Toys City",    "phone"=>"212-999-8887", "category"=> "kids","floor"=>"3F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>16, "t"=>"dir", "shopname"=>"Erafone",      "phone"=>"212-999-8887", "category"=> "telecom","floor"=>"3F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>17, "t"=>"dir", "shopname"=>"OkeShop",      "phone"=>"212-999-8887", "category"=> "telecom","floor"=>"3F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>18, "t"=>"dir", "shopname"=>"Infinity",     "phone"=>"212-999-8887", "category"=> "computer","floor"=>"3F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>19, "t"=>"dir", "shopname"=>"Telkomsel",    "phone"=>"212-999-8887", "category"=> "telecom","floor"=>"3F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>21, "t"=>"dir", "shopname"=>"Borders",      "phone"=>"212-999-8887", "category"=> "books","floor"=>"4F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"),
            array("id"=>22, "t"=>"dir", "shopname"=>"Kinokuniya",   "phone"=>"212-999-8887", "category"=> "books","floor"=>"4F", "location"=>"B12", "description"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio")
		);

	$news = array(
			    array(
	                "id"=>23,
	                "t"=>"art",
	                "title"=>"Burger Blenger Coming",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"whatson",
	                "is_head"=> 1
	            ),
	            array(
	                "id"=>24,
	                "t"=>"art",
	                "title"=>"Burger Blenger Coming",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"whatson",
	                "is_head"=> 0
	            ),
	            array(
	                "id"=>25,
	                "t"=>"art",
	                "title"=>"Burger Blenger Coming",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"whatson",
	                "is_head"=> 0
	            ),
	            array(
	                "id"=>26,
	                "t"=>"art",
	                "title"=>"Burger Blenger Coming",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"whatson",
	                "is_head"=> 0
	            ),
	            array(
	                "id"=>27,
	                "t"=>"art",
	                "title"=>"Burger Blenger Coming",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"whatson",
	                "is_head"=> 0
	            ),
	            array(
	                "id"=>28,
	                "t"=>"art",
	                "title"=>"Beli Burger Dapat Steak",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"promo",
	                "is_head"=> 1
	            ),
	            array(
	                "id"=>29,
	                "t"=>"art",
	                "title"=>"Ke Singapura Hanya IDR 888 !!",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"promo",
	                "is_head"=> 0
	            ),
	            array(
	                "id"=>30,
	                "t"=>"art",
	                "title"=>"Mau Kemana Liburan Ini ?",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"promo",
	                "is_head"=> 0
	            ),
	            array(
	                "id"=>31,
	                "t"=>"art",
	                "title"=>"Burger Blenger Coming",
	                "short"=>"27 November 2012 - 31 November 2012",
	                "body"=>"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
	                "section"=>"promo",
	                "is_head"=> 0
	            )
		);


if($_GET['s'] == 'dir' ){
	echo $_GET['callback'] . '('.json_encode($directory).')';
}else if($_GET['s'] == 'news' ){
	echo $_GET['callback'] . '('.json_encode($news).')';
}


?>