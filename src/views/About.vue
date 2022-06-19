<template>
  <div class="about">
            <section class="page_banner bg_18">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="pb_content text-center">
                            <h2>About us</h2>
                            <p><a href='/'>Home</a><b>-</b><span>About us</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <lead></lead>
    <our-services></our-services>
    <methods></methods>
    <business-program></business-program>
    <projects></projects>
    <business-partners></business-partners>
    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactForm from '../components/common/contactForm.vue'
import BusinessPartners from './AboutUs/businessPartners.vue'
import BusinessProgram from './AboutUs/businessProgram.vue'
import lead from './AboutUs/lead.vue'
import Methods from './AboutUs/methods.vue'
import OurServices from './AboutUs/ourServices.vue'
import Projects from './AboutUs/projects.vue'
export default {
  components: { lead , OurServices , Methods, BusinessProgram, ContactForm, Projects, BusinessPartners },
  
}
</script>

