/ *  
   *   j Q u e r y   E a s i n g   v 1 . 3   -   h t t p : / / g s g d . c o . u k / s a n d b o x / j q u e r y / e a s i n g /  
   *  
   *   U s e s   t h e   b u i l t   i n   e a s i n g   c a p a b i l i t i e s   a d d e d   I n   j Q u e r y   1 . 1  
   *   t o   o f f e r   m u l t i p l e   e a s i n g   o p t i o n s  
   *  
   *   T E R M S   O F   U S E   -   j Q u e r y   E a s i n g  
   *  
   *   O p e n   s o u r c e   u n d e r   t h e   B S D   L i c e n s e .  
   *  
   *   C o p y r i g h t   �   2 0 0 8   G e o r g e   M c G i n l e y   S m i t h  
   *   A l l   r i g h t s   r e s e r v e d .  
   *  
   *   R e d i s t r i b u t i o n   a n d   u s e   i n   s o u r c e   a n d   b i n a r y   f o r m s ,   w i t h   o r   w i t h o u t   m o d i f i c a t i o n ,  
   *   a r e   p e r m i t t e d   p r o v i d e d   t h a t   t h e   f o l l o w i n g   c o n d i t i o n s   a r e   m e t :  
   *  
   *   R e d i s t r i b u t i o n s   o f   s o u r c e   c o d e   m u s t   r e t a i n   t h e   a b o v e   c o p y r i g h t   n o t i c e ,   t h i s   l i s t   o f  
   *   c o n d i t i o n s   a n d   t h e   f o l l o w i n g   d i s c l a i m e r .  
   *   R e d i s t r i b u t i o n s   i n   b i n a r y   f o r m   m u s t   r e p r o d u c e   t h e   a b o v e   c o p y r i g h t   n o t i c e ,   t h i s   l i s t  
   *   o f   c o n d i t i o n s   a n d   t h e   f o l l o w i n g   d i s c l a i m e r   i n   t h e   d o c u m e n t a t i o n   a n d / o r   o t h e r   m a t e r i a l s  
   *   p r o v i d e d   w i t h   t h e   d i s t r i b u t i o n .  
   *  
   *   N e i t h e r   t h e   n a m e   o f   t h e   a u t h o r   n o r   t h e   n a m e s   o f   c o n t r i b u t o r s   m a y   b e   u s e d   t o   e n d o r s e  
   *   o r   p r o m o t e   p r o d u c t s   d e r i v e d   f r o m   t h i s   s o f t w a r e   w i t h o u t   s p e c i f i c   p r i o r   w r i t t e n   p e r m i s s i o n .  
   *  
   *   T H I S   S O F T W A R E   I S   P R O V I D E D   B Y   T H E   C O P Y R I G H T   H O L D E R S   A N D   C O N T R I B U T O R S   " A S   I S "   A N D   A N Y  
   *   E X P R E S S   O R   I M P L I E D   W A R R A N T I E S ,   I N C L U D I N G ,   B U T   N O T   L I M I T E D   T O ,   T H E   I M P L I E D   W A R R A N T I E S   O F  
   *   M E R C H A N T A B I L I T Y   A N D   F I T N E S S   F O R   A   P A R T I C U L A R   P U R P O S E   A R E   D I S C L A I M E D .   I N   N O   E V E N T   S H A L L   T H E  
   *     C O P Y R I G H T   O W N E R   O R   C O N T R I B U T O R S   B E   L I A B L E   F O R   A N Y   D I R E C T ,   I N D I R E C T ,   I N C I D E N T A L ,   S P E C I A L ,  
   *     E X E M P L A R Y ,   O R   C O N S E Q U E N T I A L   D A M A G E S   ( I N C L U D I N G ,   B U T   N O T   L I M I T E D   T O ,   P R O C U R E M E N T   O F   S U B S T I T U T E  
   *     G O O D S   O R   S E R V I C E S ;   L O S S   O F   U S E ,   D A T A ,   O R   P R O F I T S ;   O R   B U S I N E S S   I N T E R R U P T I O N )   H O W E V E R   C A U S E D  
   *   A N D   O N   A N Y   T H E O R Y   O F   L I A B I L I T Y ,   W H E T H E R   I N   C O N T R A C T ,   S T R I C T   L I A B I L I T Y ,   O R   T O R T   ( I N C L U D I N G  
   *     N E G L I G E N C E   O R   O T H E R W I S E )   A R I S I N G   I N   A N Y   W A Y   O U T   O F   T H E   U S E   O F   T H I S   S O F T W A R E ,   E V E N   I F   A D V I S E D  
   *   O F   T H E   P O S S I B I L I T Y   O F   S U C H   D A M A G E .  
   *  
 * /  
  
 / /   t :   c u r r e n t   t i m e ,   b :   b e g I n n I n g   v a l u e ,   c :   c h a n g e   I n   v a l u e ,   d :   d u r a t i o n  
 j Q u e r y . e a s i n g [ ' j s w i n g ' ]   =   j Q u e r y . e a s i n g [ ' s w i n g ' ] ;  
  
 j Q u e r y . e x t e n d (   j Q u e r y . e a s i n g ,  
 {  
 	 d e f :   ' e a s e O u t Q u a d ' ,  
 	 s w i n g :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 / / a l e r t ( j Q u e r y . e a s i n g . d e f a u l t ) ;  
 	 	 r e t u r n   j Q u e r y . e a s i n g [ j Q u e r y . e a s i n g . d e f ] ( x ,   t ,   b ,   c ,   d ) ;  
 	 } ,  
 	 e a s e I n Q u a d :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c * ( t / = d ) * t   +   b ;  
 	 } ,  
 	 e a s e O u t Q u a d :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   - c   * ( t / = d ) * ( t - 2 )   +   b ;  
 	 } ,  
 	 e a s e I n O u t Q u a d :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 i f   ( ( t / = d / 2 )   <   1 )   r e t u r n   c / 2 * t * t   +   b ;  
 	 	 r e t u r n   - c / 2   *   ( ( - - t ) * ( t - 2 )   -   1 )   +   b ;  
 	 } ,  
 	 e a s e I n C u b i c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c * ( t / = d ) * t * t   +   b ;  
 	 } ,  
 	 e a s e O u t C u b i c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c * ( ( t = t / d - 1 ) * t * t   +   1 )   +   b ;  
 	 } ,  
 	 e a s e I n O u t C u b i c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 i f   ( ( t / = d / 2 )   <   1 )   r e t u r n   c / 2 * t * t * t   +   b ;  
 	 	 r e t u r n   c / 2 * ( ( t - = 2 ) * t * t   +   2 )   +   b ;  
 	 } ,  
 	 e a s e I n Q u a r t :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c * ( t / = d ) * t * t * t   +   b ;  
 	 } ,  
 	 e a s e O u t Q u a r t :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   - c   *   ( ( t = t / d - 1 ) * t * t * t   -   1 )   +   b ;  
 	 } ,  
 	 e a s e I n O u t Q u a r t :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 i f   ( ( t / = d / 2 )   <   1 )   r e t u r n   c / 2 * t * t * t * t   +   b ;  
 	 	 r e t u r n   - c / 2   *   ( ( t - = 2 ) * t * t * t   -   2 )   +   b ;  
 	 } ,  
 	 e a s e I n Q u i n t :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c * ( t / = d ) * t * t * t * t   +   b ;  
 	 } ,  
 	 e a s e O u t Q u i n t :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c * ( ( t = t / d - 1 ) * t * t * t * t   +   1 )   +   b ;  
 	 } ,  
 	 e a s e I n O u t Q u i n t :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 i f   ( ( t / = d / 2 )   <   1 )   r e t u r n   c / 2 * t * t * t * t * t   +   b ;  
 	 	 r e t u r n   c / 2 * ( ( t - = 2 ) * t * t * t * t   +   2 )   +   b ;  
 	 } ,  
 	 e a s e I n S i n e :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   - c   *   M a t h . c o s ( t / d   *   ( M a t h . P I / 2 ) )   +   c   +   b ;  
 	 } ,  
 	 e a s e O u t S i n e :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c   *   M a t h . s i n ( t / d   *   ( M a t h . P I / 2 ) )   +   b ;  
 	 } ,  
 	 e a s e I n O u t S i n e :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   - c / 2   *   ( M a t h . c o s ( M a t h . P I * t / d )   -   1 )   +   b ;  
 	 } ,  
 	 e a s e I n E x p o :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   ( t = = 0 )   ?   b   :   c   *   M a t h . p o w ( 2 ,   1 0   *   ( t / d   -   1 ) )   +   b ;  
 	 } ,  
 	 e a s e O u t E x p o :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   ( t = = d )   ?   b + c   :   c   *   ( - M a t h . p o w ( 2 ,   - 1 0   *   t / d )   +   1 )   +   b ;  
 	 } ,  
 	 e a s e I n O u t E x p o :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 i f   ( t = = 0 )   r e t u r n   b ;  
 	 	 i f   ( t = = d )   r e t u r n   b + c ;  
 	 	 i f   ( ( t / = d / 2 )   <   1 )   r e t u r n   c / 2   *   M a t h . p o w ( 2 ,   1 0   *   ( t   -   1 ) )   +   b ;  
 	 	 r e t u r n   c / 2   *   ( - M a t h . p o w ( 2 ,   - 1 0   *   - - t )   +   2 )   +   b ;  
 	 } ,  
 	 e a s e I n C i r c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   - c   *   ( M a t h . s q r t ( 1   -   ( t / = d ) * t )   -   1 )   +   b ;  
 	 } ,  
 	 e a s e O u t C i r c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c   *   M a t h . s q r t ( 1   -   ( t = t / d - 1 ) * t )   +   b ;  
 	 } ,  
 	 e a s e I n O u t C i r c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 i f   ( ( t / = d / 2 )   <   1 )   r e t u r n   - c / 2   *   ( M a t h . s q r t ( 1   -   t * t )   -   1 )   +   b ;  
 	 	 r e t u r n   c / 2   *   ( M a t h . s q r t ( 1   -   ( t - = 2 ) * t )   +   1 )   +   b ;  
 	 } ,  
 	 e a s e I n E l a s t i c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 v a r   s = 1 . 7 0 1 5 8 ; v a r   p = 0 ; v a r   a = c ;  
 	 	 i f   ( t = = 0 )   r e t u r n   b ;     i f   ( ( t / = d ) = = 1 )   r e t u r n   b + c ;     i f   ( ! p )   p = d * . 3 ;  
 	 	 i f   ( a   <   M a t h . a b s ( c ) )   {   a = c ;   v a r   s = p / 4 ;   }  
 	 	 e l s e   v a r   s   =   p / ( 2 * M a t h . P I )   *   M a t h . a s i n   ( c / a ) ;  
 	 	 r e t u r n   - ( a * M a t h . p o w ( 2 , 1 0 * ( t - = 1 ) )   *   M a t h . s i n (   ( t * d - s ) * ( 2 * M a t h . P I ) / p   ) )   +   b ;  
 	 } ,  
 	 e a s e O u t E l a s t i c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 v a r   s = 1 . 7 0 1 5 8 ; v a r   p = 0 ; v a r   a = c ;  
 	 	 i f   ( t = = 0 )   r e t u r n   b ;     i f   ( ( t / = d ) = = 1 )   r e t u r n   b + c ;     i f   ( ! p )   p = d * . 3 ;  
 	 	 i f   ( a   <   M a t h . a b s ( c ) )   {   a = c ;   v a r   s = p / 4 ;   }  
 	 	 e l s e   v a r   s   =   p / ( 2 * M a t h . P I )   *   M a t h . a s i n   ( c / a ) ;  
 	 	 r e t u r n   a * M a t h . p o w ( 2 , - 1 0 * t )   *   M a t h . s i n (   ( t * d - s ) * ( 2 * M a t h . P I ) / p   )   +   c   +   b ;  
 	 } ,  
 	 e a s e I n O u t E l a s t i c :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 v a r   s = 1 . 7 0 1 5 8 ; v a r   p = 0 ; v a r   a = c ;  
 	 	 i f   ( t = = 0 )   r e t u r n   b ;     i f   ( ( t / = d / 2 ) = = 2 )   r e t u r n   b + c ;     i f   ( ! p )   p = d * ( . 3 * 1 . 5 ) ;  
 	 	 i f   ( a   <   M a t h . a b s ( c ) )   {   a = c ;   v a r   s = p / 4 ;   }  
 	 	 e l s e   v a r   s   =   p / ( 2 * M a t h . P I )   *   M a t h . a s i n   ( c / a ) ;  
 	 	 i f   ( t   <   1 )   r e t u r n   - . 5 * ( a * M a t h . p o w ( 2 , 1 0 * ( t - = 1 ) )   *   M a t h . s i n (   ( t * d - s ) * ( 2 * M a t h . P I ) / p   ) )   +   b ;  
 	 	 r e t u r n   a * M a t h . p o w ( 2 , - 1 0 * ( t - = 1 ) )   *   M a t h . s i n (   ( t * d - s ) * ( 2 * M a t h . P I ) / p   ) * . 5   +   c   +   b ;  
 	 } ,  
 	 e a s e I n B a c k :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d ,   s )   {  
 	 	 i f   ( s   = =   u n d e f i n e d )   s   =   1 . 7 0 1 5 8 ;  
 	 	 r e t u r n   c * ( t / = d ) * t * ( ( s + 1 ) * t   -   s )   +   b ;  
 	 } ,  
 	 e a s e O u t B a c k :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d ,   s )   {  
 	 	 i f   ( s   = =   u n d e f i n e d )   s   =   1 . 7 0 1 5 8 ;  
 	 	 r e t u r n   c * ( ( t = t / d - 1 ) * t * ( ( s + 1 ) * t   +   s )   +   1 )   +   b ;  
 	 } ,  
 	 e a s e I n O u t B a c k :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d ,   s )   {  
 	 	 i f   ( s   = =   u n d e f i n e d )   s   =   1 . 7 0 1 5 8 ;  
 	 	 i f   ( ( t / = d / 2 )   <   1 )   r e t u r n   c / 2 * ( t * t * ( ( ( s * = ( 1 . 5 2 5 ) ) + 1 ) * t   -   s ) )   +   b ;  
 	 	 r e t u r n   c / 2 * ( ( t - = 2 ) * t * ( ( ( s * = ( 1 . 5 2 5 ) ) + 1 ) * t   +   s )   +   2 )   +   b ;  
 	 } ,  
 	 e a s e I n B o u n c e :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 r e t u r n   c   -   j Q u e r y . e a s i n g . e a s e O u t B o u n c e   ( x ,   d - t ,   0 ,   c ,   d )   +   b ;  
 	 } ,  
 	 e a s e O u t B o u n c e :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 i f   ( ( t / = d )   <   ( 1 / 2 . 7 5 ) )   {  
 	 	 	 r e t u r n   c * ( 7 . 5 6 2 5 * t * t )   +   b ;  
 	 	 }   e l s e   i f   ( t   <   ( 2 / 2 . 7 5 ) )   {  
 	 	 	 r e t u r n   c * ( 7 . 5 6 2 5 * ( t - = ( 1 . 5 / 2 . 7 5 ) ) * t   +   . 7 5 )   +   b ;  
 	 	 }   e l s e   i f   ( t   <   ( 2 . 5 / 2 . 7 5 ) )   {  
 	 	 	 r e t u r n   c * ( 7 . 5 6 2 5 * ( t - = ( 2 . 2 5 / 2 . 7 5 ) ) * t   +   . 9 3 7 5 )   +   b ;  
 	 	 }   e l s e   {  
 	 	 	 r e t u r n   c * ( 7 . 5 6 2 5 * ( t - = ( 2 . 6 2 5 / 2 . 7 5 ) ) * t   +   . 9 8 4 3 7 5 )   +   b ;  
 	 	 }  
 	 } ,  
 	 e a s e I n O u t B o u n c e :   f u n c t i o n   ( x ,   t ,   b ,   c ,   d )   {  
 	 	 i f   ( t   <   d / 2 )   r e t u r n   j Q u e r y . e a s i n g . e a s e I n B o u n c e   ( x ,   t * 2 ,   0 ,   c ,   d )   *   . 5   +   b ;  
 	 	 r e t u r n   j Q u e r y . e a s i n g . e a s e O u t B o u n c e   ( x ,   t * 2 - d ,   0 ,   c ,   d )   *   . 5   +   c * . 5   +   b ;  
 	 }  
 } ) ;  
  
 / *  
   *  
   *   T E R M S   O F   U S E   -   E A S I N G   E Q U A T I O N S  
   *  
   *   O p e n   s o u r c e   u n d e r   t h e   B S D   L i c e n s e .  
   *  
   *   C o p y r i g h t   �   2 0 0 1   R o b e r t   P e n n e r  
   *   A l l   r i g h t s   r e s e r v e d .  
   *  
   *   R e d i s t r i b u t i o n   a n d   u s e   i n   s o u r c e   a n d   b i n a r y   f o r m s ,   w i t h   o r   w i t h o u t   m o d i f i c a t i o n ,  
   *   a r e   p e r m i t t e d   p r o v i d e d   t h a t   t h e   f o l l o w i n g   c o n d i t i o n s   a r e   m e t :  
   *  
   *   R e d i s t r i b u t i o n s   o f   s o u r c e   c o d e   m u s t   r e t a i n   t h e   a b o v e   c o p y r i g h t   n o t i c e ,   t h i s   l i s t   o f  
   *   c o n d i t i o n s   a n d   t h e   f o l l o w i n g   d i s c l a i m e r .  
   *   R e d i s t r i b u t i o n s   i n   b i n a r y   f o r m   m u s t   r e p r o d u c e   t h e   a b o v e   c o p y r i g h t   n o t i c e ,   t h i s   l i s t  
   *   o f   c o n d i t i o n s   a n d   t h e   f o l l o w i n g   d i s c l a i m e r   i n   t h e   d o c u m e n t a t i o n   a n d / o r   o t h e r   m a t e r i a l s  
   *   p r o v i d e d   w i t h   t h e   d i s t r i b u t i o n .  
   *  
   *   N e i t h e r   t h e   n a m e   o f   t h e   a u t h o r   n o r   t h e   n a m e s   o f   c o n t r i b u t o r s   m a y   b e   u s e d   t o   e n d o r s e  
   *   o r   p r o m o t e   p r o d u c t s   d e r i v e d   f r o m   t h i s   s o f t w a r e   w i t h o u t   s p e c i f i c   p r i o r   w r i t t e n   p e r m i s s i o n .  
   *  
   *   T H I S   S O F T W A R E   I S   P R O V I D E D   B Y   T H E   C O P Y R I G H T   H O L D E R S   A N D   C O N T R I B U T O R S   " A S   I S "   A N D   A N Y  
   *   E X P R E S S   O R   I M P L I E D   W A R R A N T I E S ,   I N C L U D I N G ,   B U T   N O T   L I M I T E D   T O ,   T H E   I M P L I E D   W A R R A N T I E S   O F  
   *   M E R C H A N T A B I L I T Y   A N D   F I T N E S S   F O R   A   P A R T I C U L A R   P U R P O S E   A R E   D I S C L A I M E D .   I N   N O   E V E N T   S H A L L   T H E  
   *     C O P Y R I G H T   O W N E R   O R   C O N T R I B U T O R S   B E   L I A B L E   F O R   A N Y   D I R E C T ,   I N D I R E C T ,   I N C I D E N T A L ,   S P E C I A L ,  
   *     E X E M P L A R Y ,   O R   C O N S E Q U E N T I A L   D A M A G E S   ( I N C L U D I N G ,   B U T   N O T   L I M I T E D   T O ,   P R O C U R E M E N T   O F   S U B S T I T U T E  
   *     G O O D S   O R   S E R V I C E S ;   L O S S   O F   U S E ,   D A T A ,   O R   P R O F I T S ;   O R   B U S I N E S S   I N T E R R U P T I O N )   H O W E V E R   C A U S E D  
   *   A N D   O N   A N Y   T H E O R Y   O F   L I A B I L I T Y ,   W H E T H E R   I N   C O N T R A C T ,   S T R I C T   L I A B I L I T Y ,   O R   T O R T   ( I N C L U D I N G  
   *     N E G L I G E N C E   O R   O T H E R W I S E )   A R I S I N G   I N   A N Y   W A Y   O U T   O F   T H E   U S E   O F   T H I S   S O F T W A R E ,   E V E N   I F   A D V I S E D  
   *   O F   T H E   P O S S I B I L I T Y   O F   S U C H   D A M A G E .  
   *  
   * /  
 