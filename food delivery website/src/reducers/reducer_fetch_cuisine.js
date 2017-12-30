var staticCuisineData = [
							{"italian":"https://www.makemytrip.com/travel-guide/media/dg_image/ooty/Sidewalk-Cafe.jpg"},
							{"asian":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FTturHr-d3uSHEoiREiL1WdAbdGlQ6hY5tIn60VNp3c8FJi2iA"},
							{"european":"https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/181/117/466070607.jpg"},
							{"indian":"https://dishesanddishes.files.wordpress.com/2012/01/img_1339.jpg"},
							{"seafood":"http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/GourmetTraveller/2015/01/13/33200/0215GT-pete-evans-prawn-satay.jpg?Image=%2Fs3%2Fdigital-cougar-assets%2FGourmetTraveller%2F2015%2F01%2F13%2F33200%2F0215GT-pete-evans-prawn-satay.jpg&Height=733&Width=628&Constrain=True&AllowUpSizing=False&Mode=Crop"},
							{"veg":"http://flexactivesports.com/wp-content/uploads/2015/10/Meals.jpg"}
						]

export default function(state = staticCuisineData, action){
	switch(action.payload){
		case 'FETCH_CUISINE':
		return staticCuisineData
	}
	return state
}