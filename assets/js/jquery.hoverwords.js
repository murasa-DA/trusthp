/ * 
 h o v e r w o r d s   p l u g i n 
 * / 
 ( f u n c t i o n ( $ )   { 
 
 	 v a r   a u x 	 	 =   { 
 	 	 	 t o g g l e C h a r s 	 :   f u n c t i o n ( $ e l ,   s e t t i n g s )   { 
 	 	 	 	 v a r   $ w r a p p e r s 	 =   $ e l . f i n d ( ' . s l - w r a p p e r ' ) , 
 	 	 	 	 	 t o t a l 	 	 =   $ w r a p p e r s . l e n g t h , 
 	 	 	 	 	 c 1 	 	 	 =   $ e l . h a s C l a s s ( ' s l - w 1 ' )   ?   ' s l - w 2 '   :   ' s l - w 1 ' , 
 	 	 	 	 	 c 2 	 	 	 =   $ e l . h a s C l a s s ( ' s l - w 1 ' )   ?   ' s l - w 1 '   :   ' s l - w 2 ' ; 
 
 	 	 	 	 $ e l . a d d C l a s s ( c 1 ) . r e m o v e C l a s s ( c 2 ) ; 
 
 	 	 	 	 $ w r a p p e r s . e a c h ( f u n c t i o n ( i )   { 
 	 	 	 	 	 v a r   $ w r a p p e r   	 	 	 =   $ ( t h i s ) , 
 	 	 	 	 	 	 i n t e r v a l ; 
 
 	 	 	 	 	 s w i t c h ( s e t t i n g s . d i r )   { 
 	 	 	 	 	 	 c a s e   ' l e f t r i g h t '   :   i n t e r v a l   =   i   *   s e t t i n g s . d e l a y ;   b r e a k ; 
 	 	 	 	 	 	 c a s e   ' r i g h t l e f t '   :   i n t e r v a l   =   ( t o t a l   -   1   -   i )   *   s e t t i n g s . d e l a y ;   b r e a k ; 
 	 	 	 	 	 } ; 
 
 	 	 	 	 	 i f ( s e t t i n g s . d e l a y )   { 
 	 	 	 	 	 	 s e t T i m e o u t ( f u n c t i o n ( )   { 
 	 	 	 	 	 	 	 a u x . s w i t c h C h a r ( $ w r a p p e r ,   $ e l ,   s e t t i n g s ,   c 1 ,   c 2 ) ; 
 	 	 	 	 	 	 } ,   i n t e r v a l ) ; 
 	 	 	 	 	 } 
 	 	 	 	 	 e l s e 
 	 	 	 	 	 	 a u x . s w i t c h C h a r ( $ w r a p p e r ,   $ e l ,   s e t t i n g s ,   c 1 ,   c 2 ) ; 
 	 	 	 	 } ) ; 
 	 	 	 } , 
 	 	 	 s w i t c h C h a r 	 :   f u n c t i o n ( $ w r a p p e r ,   $ e l ,   s e t t i n g s ,   c 1 ,   c 2 )   { 
 	 	 	 	 v a r   $ n e w C h a r 	 	 	 =   $ w r a p p e r . f i n d ( ' s p a n . '   +   c 1 ) , 
 	 	 	 	 	 $ c u r r e n t C h a r 	 	 =   $ w r a p p e r . f i n d ( ' s p a n . '   +   c 2 ) , 
 	 	 	 	 	 n e x t W r a p p e r W 	 	 =   $ c u r r e n t C h a r . w i d t h ( ) ; 
 
 	 	 	 	 i f ( $ n e w C h a r . l e n g t h ) 
 	 	 	 	 	 n e x t W r a p p e r W 	 	 =   $ n e w C h a r . w i d t h ( ) ; 
 
 	 	 	 	 / / n e w   s l i d e s   i n 
 	 	 	 	 i f ( $ n e w C h a r . l e n g t h ) 	 { 
 	 	 	 	 	 v a r   p a r a m 	 =   { l e f t 	 :   ' 0 p x ' } ; 
 	 	 	 	 	 i f ( ! $ . b r o w s e r . m s i e   & &   s e t t i n g s . o p a c i t y ) 
 	 	 	 	 	 	 p a r a m . o p a c i t y   	 =   1 ; 
 
 	 	 	 	 	 $ n e w C h a r . s t o p ( ) . a n i m a t e ( p a r a m ,   s e t t i n g s . s p e e d ,   s e t t i n g s . e a s i n g ) ; 
 
 	 	 	 	 	 / / a n i m a t e   t h e   w r a p p e r s   w i d t h 
 	 	 	 	 	 $ w r a p p e r . s t o p ( ) . a n i m a t e ( { 
 	 	 	 	 	 	 w i d t h 	 :   n e x t W r a p p e r W   +   ' p x ' 
                         / / w i d t h : ' 5 0 p x ' 
 	 	 	 	 	 } ,   s e t t i n g s . s p e e d ) ; 
 	 	 	 	 } 
 
 	 	 	 	 / / c u r r e n t   s l i d e s   o u t 
 	 	 	 	 i f ( ! s e t t i n g s . o v e r l a y   | |   c 1   = = =   ' s l - w 1 ' )   { 
 	 	 	 	 	 i f ( s e t t i n g s . d i r   = = =   ' l e f t r i g h t ' ) 
 	 	 	 	 	 	 v a r   p a r a m 	 =   { l e f t 	 :   - $ c u r r e n t C h a r . w i d t h ( )   +   ' p x ' } ; 
 	 	 	 	 	 e l s e 
 	 	 	 	 	 	 v a r   p a r a m 	 =   { l e f t 	 :   n e x t W r a p p e r W   +   ' p x ' } ; 
 
 	 	 	 	 	 i f ( ! $ . b r o w s e r . m s i e   & &   s e t t i n g s . o p a c i t y ) 
 	 	 	 	 	 	 p a r a m . o p a c i t y   	 =   0 ; 
 	 	 	 	 	 $ c u r r e n t C h a r . s t o p ( ) . a n i m a t e ( p a r a m ,   s e t t i n g s . s p e e d ,   s e t t i n g s . e a s i n g ) ; 
 	 	 	 	 } 
 	 	 	 } 
 	 	 } , 
 	 	 m e t h o d s   =   { 
 	 	 	 i n i t   	 :   f u n c t i o n ( o p t i o n s )   { 
 
 	 	 	 	 i f ( t h i s . l e n g t h ) { 
 
 	 	 	 	 	 v a r   s e t t i n g s   =   { 
 	 	 	 	 	 	 d e l a y 	 	 :   f a l s e , 	 	 / /   e a c h   l e t t e r   w i l l   h a v e   d i f f e r e n t   a n i m a t i o n   t i m e s 
 	 	 	 	 	 	 s p e e d 	 	 :   3 0 0 , 	 	 	 / /   a n i m a t i o n   s p e e d 
 	 	 	 	 	 	 e a s i n g 	 	 :   ' j s w i n g ' , 	 	 / /   e a s i n g   a n i m a t i o n 
 	 	 	 	 	 	 d i r 	 	 	 :   ' l e f t r i g h t ' ,   	 / /   l e f t r i g h t   -   c u r r e n t   g o e s   l e f t ,   n e w   o n e   g o e s   r i g h t   | |   r i g h t l e f t   -   c u r r e n t   g o e s   r i g h t ,   n e w   o n e   g o e s   l e f t , 
 	 	 	 	 	 	 o v e r l a y 	 	 :   f a l s e , 	 	 / /   h o v e r   w o r d   i s   s l i d e d   o n   t o p   o f   t h e   c u r r e n t   w o r d   ( j u s t   f o r   t h e   c a s e   w h e n   t h e   h o v e r   w o r d   e q u a l s   w o r d ) 
 	 	 	 	 	 	 o p a c i t y 	 	 :   t r u e 	 	 	 / /   a n i m a t e   t h e   l e t t e r s   o p a c i t y 
 	 	 	 	 	 } ; 
 
 	 	 	 	 	 r e t u r n   t h i s . e a c h ( f u n c t i o n ( ) { 
 
 	 	 	 	 	 	 / /   I f   o p t i o n s   e x i s t ,   l e t s   m e r g e   t h e m   w i t h   o u r   d e f a u l t   s e t t i n g s 
 	 	 	 	 	 	 i f   (   o p t i o n s   )   { 
 	 	 	 	 	 	 	 $ . e x t e n d (   s e t t i n g s ,   o p t i o n s   ) ; 
 	 	 	 	 	 	 } 
 
 	 	 	 	 	 	 v a r   $ e l   	 	 	 =   $ ( t h i s ) . a d d C l a s s ( ' s l - w 1 ' ) , 
 	 	 	 	 	 	 	 w o r d 	 	 	 =   $ e l . d a t a ( ' h o v e r ' )   | |   $ e l . h t m l ( ) ;   	 / /   i f   d a t a - h o v e r   w a s   s e t   t h e   h o v e r   w o r d   i s   t h e   o n e   s p e c i f i e d ,   o t h e r w i s e   t h e   h o v e r   w o r d   i s   a l s o   t h e   w o r d 
 
 	 	 	 	 	 	 i f ( $ e l . d a t a ( ' h o v e r ' ) )   s e t t i n g s . o v e r l a y   =   f a l s e ; 	 	 	 / /   t h e   o v e r l a y   o p t i o n   w i l l   o n l y   w o r k   f o r   t h e   c a s e   w h e n   t h e   h o v e r   w o r d   e q u a l s   w o r d 
 
 	 	 	 	 	 	 $ e l . l e t t e r i n g ( ) ; 	 	 	 	 	 	 	 	 	 	 / /   a p p l y   t h e   l e t t e r i n g . j s   p l u g i n 
 
 	 	 	 	 	 	 v a r 	 $ c h a r s 	 	 	 =   $ e l . c h i l d r e n ( ' s p a n ' ) . a d d C l a s s ( ' s l - w 1 ' ) , 
 	 	 	 	 	 	 	 $ t m p   	 	 	 =   $ ( ' < s p a n > '   +   w o r d   +   ' < / s p a n > ' ) . l e t t e r i n g ( ) ; 
 
 	 	 	 	 	 	 $ c h a r s . e a c h ( f u n c t i o n ( i )   { 
 	 	 	 	 	 	 	 v a r   $ c h a r 	 	 =   $ ( t h i s ) ; 
 
 	 	 	 	 	 	 	 $ c h a r . w r a p (   $ ( ' < s p a n / > ' ) . a d d C l a s s ( ' s l - w r a p p e r ' )   ) 	 / /   w r a p   e a c h   o f   t h e   w o r d s   c h a r s ,   a n d   s e t   w i d t h   o f   e a c h   w r a p p e r   =   c h a r s   w i d t h 
 	 	 	 	 	 	 	 	   . p a r e n t ( ) . c s s ( { 
 	 	 	 	 	 	 	 	 	 w i d t h   :   $ c h a r . w i d t h ( )   +   ' p x ' 
                                     / / w i d t h : ' a u t o ' 
 	 	 	 	 	 	 	 	     } ) ; 
 	 	 	 	 	 	 } ) ; 
 
 	 	 	 	 	 	 $ t m p . c h i l d r e n ( ' s p a n ' ) . e a c h ( f u n c t i o n ( i )   { 
 	 	 	 	 	 	 	 v a r   $ c h a r 	 	 =   $ ( t h i s ) , 
 	 	 	 	 	 	 	 	 $ w r a p p e r   	 =   $ e l . c h i l d r e n ( ' . s l - w r a p p e r ' ) . e q ( i ) ; 
 
 	 	 	 	 	 	 	 i f ( $ w r a p p e r . l e n g t h ) 	 	 	 	 	 	 	 	 	 / /   c h e c k   i f   t h e r e s   a   w r a p p e r   t o   i n s e r t   t h e   c h a r 
 	 	 	 	 	 	 	 	 $ w r a p p e r . p r e p e n d (   $ c h a r . a d d C l a s s ( ' s l - w 2 ' )   ) ; 
 	 	 	 	 	 	 	 e l s e   { 	 	 	 	 	 	 	 	 	 	 	 	 / /   o t h e r w i s e   c r e a t e   o n e 
 	 	 	 	 	 	 	 	 $ e l . a p p e n d ( 
 	 	 	 	 	 	 	 	 	 $ ( ' < s p a n   c l a s s = " s l - w r a p p e r " > < / s p a n > ' ) . p r e p e n d (   $ c h a r . a d d C l a s s ( ' s l - w 2 ' )   ) 
 	 	 	 	 	 	 	 	 ) ; 
 
 	 	 	 	 	 	 	 	 $ c h a r . p a r e n t ( ) . c s s ( { 
 	 	 	 	 	 	 	 	 	 w i d t h   :   $ c h a r . w i d t h ( )   +   ' p x ' 
                                     / / w i d t h   :   ' a u t o ' 
 	 	 	 	 	 	 	 	 } ) ; 
 	 	 	 	 	 	 	 } 
 
 	 	 	 	 	 	 	 i f ( ! $ . b r o w s e r . m s i e   & &   s e t t i n g s . o p a c i t y ) 
 	 	 	 	 	 	 	 	 	 $ c h a r . c s s ( ' o p a c i t y ' ,   0 ) ; 
 
 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 / /   " h i d e "   t h e   c h a r 
 	 	 	 	 	 	 	 i f ( s e t t i n g s . d i r   = = =   ' l e f t r i g h t ' ) 
 	 	 	 	 	 	 	 	 $ c h a r . c s s ( ' l e f t ' ,   -   $ c h a r . w i d t h ( )   +   ' p x ' ) ; 
 	 	 	 	 	 	 	 e l s e 
 	 	 	 	 	 	 	 	 $ c h a r . c s s ( ' l e f t ' ,   $ c h a r . p a r e n t ( ) . w i d t h ( )   +   ' p x ' ) ; 
 	 	 	 	 	 	 } ) ; 
 
 	 	 	 	 	 	 / /   m o u s e e n t e r   /   m o u s e l e a v e   e v e n t s   -   s w i c t h   t o   t h e   o t h e r   w o r d 
 	 	 	 	 	 	 $ e l . b i n d ( ' m o u s e e n t e r . h o v e r w o r d s   m o u s e l e a v e . h o v e r w o r d s ' ,   f u n c t i o n ( e )   { 
 	 	 	 	 	 	 	 a u x . t o g g l e C h a r s ( $ e l ,   s e t t i n g s ) ; 
 	 	 	 	 	 	 } ) ; 
 
 	 	 	 	 	 } ) ; 
 	 	 	 	 } 
 	 	 	 } 
 	 	 } ; 
 
 	 $ . f n . h o v e r w o r d s   =   f u n c t i o n ( m e t h o d )   { 
 	 	 i f   (   m e t h o d s [ m e t h o d ]   )   { 
 	 	 	 r e t u r n   m e t h o d s [ m e t h o d ] . a p p l y (   t h i s ,   A r r a y . p r o t o t y p e . s l i c e . c a l l (   a r g u m e n t s ,   1   ) ) ; 
 	 	 }   e l s e   i f   (   t y p e o f   m e t h o d   = = =   ' o b j e c t '   | |   !   m e t h o d   )   { 
 	 	 	 r e t u r n   m e t h o d s . i n i t . a p p l y (   t h i s ,   a r g u m e n t s   ) ; 
 	 	 }   e l s e   { 
 	 	 	 $ . e r r o r (   ' M e t h o d   '   +     m e t h o d   +   '   d o e s   n o t   e x i s t   o n   j Q u e r y . h o v e r w o r d s '   ) ; 
 	 	 } 
 	 } ; 
 } ) ( j Q u e r y ) ; 
 