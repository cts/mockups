/*
 * Contact Info
 */
mockup| .title               :is          body | .title;
mockup| a.headshot { attribute: href } :is body| img.headshot { attribute: src };
mockup| img.headshot { attribute: src } :is body| img.headshot { attribute: src };
mockup| .contact-info        :is          body| .contact-info;

mockup| .content-blocks       :if-exist   body| .content-blocks;
mockup| .content-blocks       :are        body| .content-blocks;
mockup| .content-blocks .content-block .block-title-wrapper :if-exist body| .content-blocks .content-block .block-title;
mockup| .content-blocks .content-block .block-title  :is   body| .content-blocks .content-block .block-title;
mockup| .content-blocks .content-block .block-body   :is   body| .content-blocks .content-block .block-body;
