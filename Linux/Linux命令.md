# Linux 命令
#移动文件
mv [选项] 源文件或目录 目标文件或目录

命令参数：
-b ：若需覆盖文件，则覆盖前先行备份；
-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖；
-u ：若目标文件已经存在，且 source 比较新，才会更新(update)。


将文件log1.txt，log2.txt，log3.txt移动到目录test3中


    mv log1.txt log2.txt log3.txt test3


#删除文件 文件夹
rm -rf 目录
