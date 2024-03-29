/ * * 
   *   @ n a m e 	 	 S h u f f l e   L e t t e r s 
   *   @ a u t h o r 	 	 M a r t i n   A n g e l o v 
   *   @ v e r s i o n   	 1 . 0 
   *   @ u r l 	 	 	 h t t p : / / t u t o r i a l z i n e . c o m / 2 0 1 1 / 0 9 / s h u f f l e - l e t t e r s - e f f e c t - j q u e r y / 
   *   @ l i c e n s e 	 	 M I T   L i c e n s e 
   * / 
 
 ( f u n c t i o n ( $ ) { 
 
 	 $ . f n . s h u f f l e L e t t e r s   =   f u n c t i o n ( p r o p ) { 
 
 	 	 v a r   o p t i o n s   =   $ . e x t e n d ( { 
 	 	 	 " s t e p " 	 	 :   8 , 	 	 	 / /   H o w   m a n y   t i m e s   s h o u l d   t h e   l e t t e r s   b e   c h a n g e d 
 	 	 	 " f p s " 	 	 :   2 5 , 	 	 	 / /   F r a m e s   P e r   S e c o n d 
 	 	 	 " t e x t " 	 	 :   " " ,   	 	 	 / /   U s e   t h i s   t e x t   i n s t e a d   o f   t h e   c o n t e n t s 
 	 	 	 " c a l l b a c k " 	 :   f u n c t i o n ( ) { } 	 / /   R u n   o n c e   t h e   a n i m a t i o n   i s   c o m p l e t e 
 	 	 } , p r o p ) 
 
 	 	 r e t u r n   t h i s . e a c h ( f u n c t i o n ( ) { 
 
 	 	 	 v a r   e l   =   $ ( t h i s ) , 
 	 	 	 	 s t r   =   " " ; 
 
 
 	 	 	 / /   P r e v e n t i n g   p a r a l l e l   a n i m a t i o n s   u s i n g   a   f l a g ; 
 
 	 	 	 i f ( e l . d a t a ( ' a n i m a t e d ' ) ) { 
 	 	 	 	 r e t u r n   t r u e ; 
 	 	 	 } 
 
 	 	 	 e l . d a t a ( ' a n i m a t e d ' , t r u e ) ; 
 
 
 	 	 	 i f ( o p t i o n s . t e x t )   { 
 	 	 	 	 s t r   =   o p t i o n s . t e x t . s p l i t ( ' ' ) ; 
 	 	 	 } 
 	 	 	 e l s e   { 
 	 	 	 	 s t r   =   e l . t e x t ( ) . s p l i t ( ' ' ) ; 
 	 	 	 } 
 
 	 	 	 / /   T h e   t y p e s   a r r a y   h o l d s   t h e   t y p e   f o r   e a c h   c h a r a c t e r ; 
 	 	 	 / /   L e t t e r s   h o l d s   t h e   p o s i t i o n s   o f   n o n - s p a c e   c h a r a c t e r s ; 
 
 	 	 	 v a r   t y p e s   =   [ ] , 
 	 	 	 	 l e t t e r s   =   [ ] ; 
 
 	 	 	 / /   L o o p i n g   t h r o u g h   a l l   t h e   c h a r s   o f   t h e   s t r i n g 
 
 	 	 	 f o r ( v a r   i = 0 ; i < s t r . l e n g t h ; i + + ) { 
 
 	 	 	 	 v a r   c h   =   s t r [ i ] ; 
 
 	 	 	 	 i f ( c h   = =   "   " ) { 
 	 	 	 	 	 t y p e s [ i ]   =   " s p a c e " ; 
 	 	 	 	 	 c o n t i n u e ; 
 	 	 	 	 } 
 	 	 	 	 e l s e   i f ( / [ a - z ] / . t e s t ( c h ) ) { 
 	 	 	 	 	 t y p e s [ i ]   =   " l o w e r L e t t e r " ; 
 	 	 	 	 } 
 	 	 	 	 e l s e   i f ( / [ A - Z ] / . t e s t ( c h ) ) { 
 	 	 	 	 	 t y p e s [ i ]   =   " u p p e r L e t t e r " ; 
 	 	 	 	 } 
 	 	 	 	 e l s e   { 
 	 	 	 	 	 t y p e s [ i ]   =   " s y m b o l " ; 
 	 	 	 	 } 
 
 	 	 	 	 l e t t e r s . p u s h ( i ) ; 
 	 	 	 } 
 
 	 	 	 e l . h t m l ( " " ) ; 
 
 	 	 	 / /   S e l f   e x e c u t i n g   n a m e d   f u n c t i o n   e x p r e s s i o n : 
 
 	 	 	 ( f u n c t i o n   s h u f f l e ( s t a r t ) { 
 
 	 	 	 	 / /   T h i s   c o d e   i s   r u n   o p t i o n s . f p s   t i m e s   p e r   s e c o n d 
 	 	 	 	 / /   a n d   u p d a t e s   t h e   c o n t e n t s   o f   t h e   p a g e   e l e m e n t 
 
 	 	 	 	 v a r   i , 
 	 	 	 	 	 l e n   =   l e t t e r s . l e n g t h , 
 	 	 	 	 	 s t r C o p y   =   s t r . s l i c e ( 0 ) ; 	 / /   F r e s h   c o p y   o f   t h e   s t r i n g 
 
 	 	 	 	 i f ( s t a r t > l e n ) { 
 
 	 	 	 	 	 / /   T h e   a n i m a t i o n   i s   c o m p l e t e .   U p d a t i n g   t h e 
 	 	 	 	 	 / /   f l a g   a n d   t r i g g e r i n g   t h e   c a l l b a c k ; 
 
 	 	 	 	 	 e l . d a t a ( ' a n i m a t e d ' , f a l s e ) ; 
 	 	 	 	 	 o p t i o n s . c a l l b a c k ( e l ) ; 
 	 	 	 	 	 r e t u r n ; 
 	 	 	 	 } 
 
 	 	 	 	 / /   A l l   t h e   w o r k   g e t s   d o n e   h e r e 
 	 	 	 	 f o r ( i = M a t h . m a x ( s t a r t , 0 ) ;   i   <   l e n ;   i + + ) { 
 
 	 	 	 	 	 / /   T h e   s t a r t   a r g u m e n t   a n d   o p t i o n s . s t e p   l i m i t 
 	 	 	 	 	 / /   t h e   c h a r a c t e r s   w e   w i l l   b e   w o r k i n g   o n   a t   o n c e 
 
 	 	 	 	 	 i f (   i   <   s t a r t + o p t i o n s . s t e p ) { 
 	 	 	 	 	 	 / /   G e n e r a t e   a   r a n d o m   c h a r a c t e r   a t   t h s i   p o s i t i o n 
 	 	 	 	 	 	 s t r C o p y [ l e t t e r s [ i ] ]   =   r a n d o m C h a r ( t y p e s [ l e t t e r s [ i ] ] ) ; 
 	 	 	 	 	 } 
 	 	 	 	 	 e l s e   { 
 	 	 	 	 	 	 s t r C o p y [ l e t t e r s [ i ] ]   =   " " ; 
 	 	 	 	 	 } 
 	 	 	 	 } 
 
 	 	 	 	 e l . t e x t ( s t r C o p y . j o i n ( " " ) ) ; 
 
 	 	 	 	 s e t T i m e o u t ( f u n c t i o n ( ) { 
 
 	 	 	 	 	 s h u f f l e ( s t a r t + 1 ) ; 
 
 	 	 	 	 } , 1 0 0 0 / o p t i o n s . f p s ) ; 
 
 	 	 	 } ) ( - o p t i o n s . s t e p ) ; 
 
 
 	 	 } ) ; 
 	 } ; 
 
 	 f u n c t i o n   r a n d o m C h a r ( t y p e ) { 
 	 	 v a r   p o o l   =   " " ; 
 
 	 	 i f   ( t y p e   = =   " l o w e r L e t t e r " ) { 
 	 	 	 p o o l   =   " a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 " ; 
 	 	 } 
 	 	 e l s e   i f   ( t y p e   = =   " u p p e r L e t t e r " ) { 
 	 	 	 p o o l   =   " A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 " ; 
 	 	 } 
 	 	 e l s e   i f   ( t y p e   = =   " s y m b o l " ) { 
 	 	 	 p o o l   =   " , . ? / \ \ ( ^ ) ! [ ] { } * & ^ % $ # ' \ " " ; 
 	 	 } 
 
 	 	 v a r   a r r   =   p o o l . s p l i t ( ' ' ) ; 
 	 	 r e t u r n   a r r [ M a t h . f l o o r ( M a t h . r a n d o m ( ) * a r r . l e n g t h ) ] ; 
 	 } 
 
 } ) ( j Q u e r y ) ; 
 