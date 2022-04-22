import React from 'react'
import './Home.css'
// ES7 snippets to do 'rfce' to get the base structure 
import Banner from './Banner'
import Card from './Card'
import { Grid } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Header/>
        <div className='home'>
            
            <Banner />
            <div className='home__section'>
            <Grid container spacing ={3}>
                
                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://c1.wallpaperflare.com/preview/382/605/294/animal-welfare-dog-imprisoned-animal-shelter.jpg"
                title="Animal Welfare"
                />
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://us.123rf.com/450wm/sarayutsy/sarayutsy1904/sarayutsy190400050/126796981-in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on-nature-fi.jpg?ver=6"
                title="Forest Conservation"
                />
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://cdn.pixabay.com/photo/2017/10/31/20/57/hands-2906458__480.jpg"
                title="Aiding the Old"
                />
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://www.chris-cancercommunity.com/wp-content/uploads/women-empowerment-quotes-hd-wallpaper-17.jpg"
                title="Women Empowerment"
                />
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://digitallearning.eletsonline.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg"
                title="Child Education"
                />
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://wallpaperaccess.com/full/624111.jpg"
                title="Healthcare"
                />
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://t3.ftcdn.net/jpg/02/63/50/44/360_F_263504477_qpBnLEqKjlXDmIn9s4Tpio9YMJWxOct4.jpg"
                title="Empowering the Disabled"
                />
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://www.kindpng.com/picc/m/121-1212281_drop-water-conservation-hd-png-download.png"
                title="Water Conservation"
                />
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Card
                src="https://p.kindpng.com/picc/s/214-2142626_city-munch-premium-food-plate-food-hd-png.png"
                title="Food Management"
                />
                </Grid>
            </Grid>
            </div>
            </div>
        <Footer/>
        </div>
    )
}


export default Home