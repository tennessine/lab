












微信商铺API手册V1.15





























 
目录
1.	商品管理接口	- 1 -
1.1	增加商品	- 1 -
1.2	删除商品	- 6 -
1.3	修改商品	- 7 -
1.4	查询商品	- 10 -
1.5	获取指定状态的所有商品	- 13 -
1.6	商品上下架	- 14 -
1.7	获取指定分类的所有子分类	- 15 -
1.8	获取指定子分类的所有SKU	- 16 -
1.9	获取指定分类的所有属性	- 18 -
2.	库存管理接口	- 21 -
2.1	增加库存	- 21 -
2.2	减少库存	- 22 -
3.	邮费模板管理接口	- 24 -
3.1	增加邮费模板	- 24 -
3.2	删除邮费模板	- 35 -
3.3	修改邮费模板	- 36 -
3.4	获取指定ID的邮费模板	- 37 -
3.5	获取所有邮费模板	- 39 -
4.	分组管理接口	- 41 -
4.1	增加分组	- 41 -
4.2	删除分组	- 42 -
4.3	修改分组属性	- 43 -
4.4	修改分组商品	- 44 -
4.5	获取所有分组	- 45 -
4.6	根据分组ID获取分组信息	- 46 -
5.	货架管理接口	- 48 -
5.1	增加货架	- 48 -
5.2	删除货架	- 56 -
5.3	修改货架	- 57 -
5.4	获取所有货架	- 58 -
5.5	根据货架ID获取货架信息	- 60 -
5.6	开发者将自己的页面作为货架	- 61 -
6.	订单管理接口	- 63 -
6.1	订单付款通知	- 63 -
6.2	根据订单ID获取订单详情	- 63 -
6.3	根据订单状态/创建时间获取订单详情	- 65 -
6.4	设置订单发货信息	- 68 -
6.5	关闭订单	- 69 -
7.	功能接口	- 71 -
7.1	上传图片	- 71 -


























 
1.	商品管理接口
1.1	增加商品
1.1.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/create?access_token=ACCESS_TOKEN
POST数据格式	json
1.1.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证，由access_token生成接口获得
POST数据	是	商品详细信息
1.1.3	POST数据
数据示例：
{
	"product_base": {
		"category_id": [
			"537074298"
		],
		"property": [
			{
				"id": "1075741879",
				"vid": "1079749967"
			},
			{
				"id": "1075754127",
				"vid": "1079795198"
			},
			{
				"id": "1075777334",
				"vid": "1079837440"
			}
		],
		"name": "testaddproduct",
		"sku_info": [
			{
				"id": "1075741873",
				"vid": [
					"1079742386",
					"1079742363"
				]
			}
		],
		"main_img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0", 
		"img": [
			"http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0"
		],
		"detail": [
			{
				"text": "test first"
			},
			{
				"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ul1UcLcwxrFdwTKYhH9Q5YZoCfX4Ncx655ZK6ibnlibCCErbKQtReySaVA/0"
			},
			{
				"text": "test again"
			}
		],
		"buy_limit": 10
	},
	"sku_list": [
		{
			"sku_id": "1075741873:1079742386",
			"price": 30,
			"icon_url": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl28bJj62XgfHPibY3ORKicN1oJ4CcoIr4BMbfA8LqyyjzOZzqrOGz3f5KWq1QGP3fo6TOTSYD3TBQjuw/0",
			"product_code": "testing",
			"ori_price": 9000000,
			"quantity": 800
		},
		{
			"sku_id": "1075741873:1079742363",
			"price": 30,
			"icon_url": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl28bJj62XgfHPibY3ORKicN1oJ4CcoIr4BMbfA8LqyyjzOZzqrOGz3f5KWq1QGP3fo6TOTSYD3TBQjuw/0",
			"product_code": "testingtesting",
			"ori_price": 9000000,
			"quantity": 800
		}
	],
	"attrext": {
		"location": {
			"country": "中国",
			"province": "广东省",
			"city": "广州市",
			"address": "T.I.T创意园"
		},
		"isPostFree": 0,
		"isHasReceipt": 1,
		"isUnderGuaranty": 0,
		"isSupportReplace": 0
	},
	"delivery_info": {
		"delivery_type": 0,
		"template_id": 0, 
		"express": [
			{
				"id": 10000027, 
				"price": 100
			}, 
			{
				"id": 10000028, 
				"price": 100
			}, 
			{
				"id": 10000029, 
				"price": 100
			}
		]
	}
}
字段	是否必选	说明
base_attr			基本属性
	name	必选	商品名称
	category	必选	商品分类id，商品分类列表请通过《获取指定分类的所有子分类》获取

	main_img	必选	商品主图(图片需调用图片上传接口获得图片Url填写至此，否则无法添加商品。图片分辨率推荐尺寸为640×600)
	img	必选	商品图片列表(图片需调用图片上传接口获得图片Url填写至此，否则无法添加商品。图片分辨率推荐尺寸为640×600)
	detail		必选	商品详情列表，显示在客户端的商品详情页内
		text		文字描述
		img		图片(图片需调用图片上传接口获得图片Url填写至此，否则无法添加商品)
	property			商品属性列表，属性列表请通过《获取指定分类的所有属性》获取

		id		属性id
		vid		属性值id
	sku_info			商品sku定义，SKU列表请通过《获取指定子分类的所有SKU》获取

		id		sku属性(SKU列表中id, 支持自定义SKU，格式为"$xxx"，xxx即为显示在客户端中的字符串)
		vid		sku值(SKU列表中vid, 如需自定义SKU，格式为"$xxx"，xxx即为显示在客户端中的字符串)
	buy_limit		用户商品限购数量
sku_list			sku信息列表(可为多个)，每个sku信息串即为一个确定的商品，比如白色的37码的鞋子
	sku_id		sku信息, 参照上述sku_table的定义; 
格式 : "id1:vid1;id2:vid2"
规则 : id_info的组合个数必须与sku_table个数一致(若商品无sku信息, 即商品为统一规格，则此处赋值为空字符串即可)
	ori_price		sku原价(单位 : 分)
	price		sku微信价(单位 : 分, 微信价必须比原价小, 否则添加商品失败)
	icon_url		sku iconurl(图片需调用图片上传接口获得图片Url)
	quantity		sku库存
	product_code		商家商品编码
attrext			商品其他属性
	isPostFree		是否包邮(0-否, 1-是), 如果包邮delivery_info字段可省略
	isHasReceipt		是否提供发票(0-否, 1-是)
	isUnderGuaranty		是否保修(0-否, 1-是)
	isSupportReplace		是否支持退换货(0-否, 1-是)
	location			商品所在地地址
		country		国家(详见《地区列表》说明)

		province		省份(详见《地区列表》说明)

		city		城市(详见《地区列表》说明)

		address		地址
delivery_info		必选	运费信息
	delivery_type		运费类型(0-使用下面express字段的默认模板, 1-使用template_id代表的邮费模板, 详见邮费模板相关API)
	template_id		邮费模板ID
	express			
		id		快递ID
		price		运费(单位 : 分)
1.1.4	返回数据说明
数据示例：
{
    "errcode": 0,
    "errmsg": "success",
    "product_id": "pDF3iYwktviE3BzU3BKiSWWi9Nkw"
}
字段	说明
errcode	错误码
errmsg	错误信息
product_id	商品ID
1.1.5	附：快递列表
id	说明
10000027	平邮
10000028	快递
10000029	EMS
1.2	删除商品
1.2.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/del?access_token=ACCESS_TOKEN
POST数据格式	json
1.2.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品信息
1.2.3	POST数据
数据示例：
{
    "product_id": "pDF3iYwktviE3BzU3BKiSWWi9Nkw"
}
字段	说明
product_id	商品ID
1.2.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
1.3	修改商品
1.3.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/update?access_token=ACCESS_TOKEN
POST数据格式	json
1.3.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品详情信息
1.3.3	POST数据
数据示例：
{
	"product_id": "pDF3iY6Kr_BV_CXaiYysoGqJhppQ", 
	"product_base": {
		"category_id": [
			"537074298"
		],
		"property": [
			{
				"id": "1075741879",
				"vid": "1079749967"
			},
			{
				"id": "1075754127",
				"vid": "1079795198"
			},
			{
				"id": "1075777334",
				"vid": "1079837440"
			}
		],
		"name": "testaddproduct",
		"sku_info": [
			{
				"id": "1075741873",
				"vid": [
					"1079742386",
					"1079742363"
				]
			}
		],
		"main_img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0", 
		"img": [
			"http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0"
		],
		"detail": [
			{
				"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ul1UcLcwxrFdwTKYhH9Q5YZoCfX4Ncx655ZK6ibnlibCCErbKQtReySaVA/0"
			}
		],
		"buy_limit": 3
	},
	"sku_list": [
		{
			"sku_id": "1075741873:1079742386",
			"price": 30,
			"icon_url": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0",
			"product_code": "testing",
			"ori_price": 9000000,
			"quantity": 800
		},
		{
			"sku_id": "1075741873:1079742363",
			"price": 30,
			"icon_url": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl28bJj62XgfHPibY3ORKicN1oJ4CcoIr4BMbfA8LqyyjzOZzqrOGz3f5KWq1QGP3fo6TOTSYD3TBQjuw/0",
			"product_code": "testingtesting",
			"ori_price": 9000000,
			"quantity": 800
		}
	],
	"attrext": {
		"location": {
			"country": "中国",
			"province": "广东省",
			"city": "广州市",
			"address": "T.I.T创意园"
		},
		"isPostFree": 0,
		"isHasReceipt": 1,
		"isUnderGuaranty": 0,
		"isSupportReplace": 0
	},
	"delivery_info": {
		"delivery_type": 0,
		"template_id": 0, 
		"express": [
			{
				"id": 10000027, 
				"price": 100
			}, 
			{
				"id": 10000028, 
				"price": 100
			}, 
			{
				"id": 10000029, 
				"price": 100
			}
		]
	}
}
备注：
○1 product_id表示要更新的商品的ID，其他字段说明请参考增加商品接口。
○2 从未上架的商品所有信息均可修改，否则商品的名称(name)、商品分类(category)、商品属性(property)这三个字段不可修改。
1.3.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
1.4	查询商品
1.4.1	接口调用请求说明
协议	https
http请求方式	GET
请求Url	https://api.weixin.qq.com/merchant/get?access_token=ACCESS_TOKEN
1.4.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
1.4.3	POST数据
数据示例：
{
    "product_id": "pDF3iYwktviE3BzU3BKiSWWi9Nkw"
}
字段	说明
product_id	商品ID
1.4.4	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success",
	"product_info": {
		"product_id": "pDF3iY6Kr_BV_CXaiYysoGqJhppQ",
		"product_base": {
			"name": "testaddproduct",
			"category_id": [
				537074298
			],
			"img": [
				"http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0"
			],
			"property": [
				{
					"id": "品牌",
					"vid": "Fujifilm/富士"
				},
				{
					"id": "屏幕尺寸",
					"vid": "1.8英寸"
				},
				{
					"id": "防抖性能",
					"vid": "CCD防抖"
				}
			],
			"sku_info": [
				{
					"id": "1075741873",
					"vid": [
						"1079742386",
						"1079742363"
					]
				}
			],
			"buy_limit": 10,
			"main_img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0",
			"detail_html": "<div class=\"item_pic_wrp\" style=\"margin-bottom:8px;font-size:0;\"><img class=\"item_pic\" style=\"width:100%;\" alt=\"\" src=\"http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0\" ></div><p style=\"margin-bottom:11px;margin-top:11px;\">test</p><div class=\"item_pic_wrp\" style=\"margin-bottom:8px;font-size:0;\"><img class=\"item_pic\" style=\"width:100%;\" alt=\"\" src=\"http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ul1UcLcwxrFdwTKYhH9Q5YZoCfX4Ncx655ZK6ibnlibCCErbKQtReySaVA/0\" ></div><p style=\"margin-bottom:11px;margin-top:11px;\">test again</p>"
		},
		"sku_list": [
			{
				"sku_id": "1075741873:1079742386",
				"price": 30,
				"icon_url": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2iccsvYbHvnphkyGtnvjD3ulEKogfsiaua49pvLfUS8Ym0GSYjViaLic0FD3vN0V8PILcibEGb2fPfEOmw/0",
				"quantity": 800,
				"product_code": "testing",
				"ori_price": 9000000
			},
			{
				"sku_id": "1075741873:1079742363",
				"price": 30,
				"icon_url": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl28bJj62XgfHPibY3ORKicN1oJ4CcoIr4BMbfA8LqyyjzOZzqrOGz3f5KWq1QGP3fo6TOTSYD3TBQjuw/0",
				"quantity": 800,
				"product_code": "testingtesting",
				"ori_price": 9000000
			}
		],
		"attrext": {
			"isPostFree": 0,
			"isHasReceipt": 1,
			"isUnderGuaranty": 0,
			"isSupportReplace": 0,
			"location": {
				"country": "中国",
				"province": "广东省",
				"city": "广州市",
				"address": "T.I.T创意园"
			}
		}, 
		"delivery_info": {
			"delivery_type": 1,
			"template_id": 103312920
		}		
	}
}
字段	说明
errcode	错误码
errmsg	错误信息
product_info	商品详情(字段说明详见增加商品)
1.5	获取指定状态的所有商品
1.5.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/getbystatus?access_token=ACCESS_TOKEN
1.5.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品详情信息
1.5.3	POST数据
数据示例：
{
    "status": 0
}
字段	说明
status	商品状态(0-全部, 1-上架, 2-下架)
1.5.4	返回数据说明
数据示例：
{
  "errcode": 0,
  "errmsg": "success",
  "products_info": [
    {
      "product_base": ..., 
      "sku_list": ..., 
  "attrext": ..., 
      "delivery_info": ..., 
      "product_id": "pDF3iY-mql6CncpbVajaB_obC3Bk",
      "status": 1
    },
    {
      "product_base": ..., 
      "sku_list": ..., 
  "attrext": ..., 
      "delivery_info": ..., 
      "product_id": "pDF3iY-mql6CncpbVajaB_obC321",
      "status": 1
    }
  ]
}
字段	说明
errcode	错误码
errmsg	错误信息
products_info	指定状态下的所有商品集合
1.6	商品上下架
1.6.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/modproductstatus?access_token=ACCESS_TOKEN
1.6.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品详情信息
1.6.3	POST数据
数据示例：
{
        "product_id": "p0FfkjnSNm4NQj0_4a9l9MtRRxzA", 
        "status": 0
}
字段	说明
product_id	商品ID
status	商品上下架标识(0-下架, 1-上架)
1.6.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
1.7	获取指定分类的所有子分类
1.7.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/category/getsub?access_token=ACCESS_TOKEN
1.7.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品大分类信息
1.7.3	POST数据
数据示例：
{
    "cate_id": 537874913
}
字段	说明
cate_id	大分类ID(根节点分类id为1)
1.7.4	返回数据说明
数据示例：
{
  "errcode": 0,
  "errmsg": "success",
  "cate_list": [
    {
      "id": "537074292",
      "name": "数码相机"
    },
    {
      "id": "537074293",
      "name": "家用摄像机"
    },
    {
      "id": "537074298",
      "name": "单反相机"
    },
    {
      "id": "537082412",
      "name": "镜头"
    },
    {
      "id": "537102001",
      "name": "单电/微单"
    }
  ]
}
字段	说明
errcode	错误码
errmsg	错误信息
cate_list		子分类列表
	id	子分类ID
	name	子分类名称
1.8	获取指定子分类的所有SKU
1.8.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/category/getsku?access_token=ACCESS_TOKEN
1.8.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品子分类信息
1.8.3	POST数据
数据示例：
{
    "cate_id": 537074292
}
字段	说明
cate_id	商品子分类ID
1.8.4	返回数据说明
数据示例：
{
  "errcode": 0,
  "errmsg": "success",
  "sku_table": [
    {
      "id": "1075741873",
      "name": "颜色",
      "value_list": [
        {
          "id": "1079742375",
          "name": "撞色"
        },
        {
          "id": "1079742376",
          "name": "桔色"
        }
      ]
    }
  ]
}
字段	说明
errcode	错误码
errmsg	错误信息
sku_table		sku列表
	id	sku id
	name	sku 名称
	value_list		sku vid列表
		id	vid
		name	vid名称
1.9	获取指定分类的所有属性
1.9.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/category/getproperty?access_token=ACCESS_TOKEN
1.9.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品分类信息
1.9.3	POST数据
数据示例：
{
    "cate_id": 537072692
}
字段	说明
cate_id	分类ID
1.9.4	返回数据说明
数据示例：
{
  "errcode": 0,
  "errmsg": "success",
  "properties": [
    {
      "id": "1075741879",
      "name": "品牌",
      "property_value": [
        {
          "id": "200050867",
          "name": "VIC&#38"
        },
        {
          "id": "200050868",
          "name": "Kate&#38"
        },
        {
          "id": "200050971",
          "name": "M&#38"
        },
        {
          "id": "200050972",
          "name": "Black&#38"
        }
      ]
    }, 
    {
        "id": "123456789", 
        "name": "颜色", 
        "property_value": ...
    }
  ]
}
字段	说明
errcode	错误码
errmsg	错误信息
properties		属性列表
	id	属性id
	name	属性名称
	property_value		属性值
		id	属性值id
		name	属性值名称


















2.	库存管理接口
2.1	增加库存
2.1.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/stock/add?access_token=ACCESS_TOKEN
POST数据格式	json
2.1.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
POST数据	是	商品库存信息
2.1.3	POST数据
数据示例：
{
    "product_id": "pDF3iY5EYkMxs4-tF8xedyES5GQI", 
    "sku_info": "10000983:10000995;10001007:10001010", 
    "quantity": 20
}
字段	说明
product_id	商品ID
sku_info	sku信息,格式"id1:vid1;id2:vid2",如商品为统一规格，则此处赋值为空字符串即可
quantity	增加的库存数量
2.1.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
2.2	减少库存
2.2.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/stock/reduce?access_token=ACCESS_TOKEN
POST数据格式	json
2.2.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品库存信息
2.2.3	POST数据
数据示例：
{
    "product_id": "pDF3iY5EYkMxs4-tF8xedyES5GQI", 
    "sku_info": "10000983:10000995;10001007:10001010", 
    "quantity": 20
}
字段	说明
product_id	商品ID
sku_info	sku信息, 格式"id1:vid1;id2:vid2"
quantity	减少的库存数量
2.2.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息

















3.	邮费模板管理接口
3.1	增加邮费模板
3.1.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/express/add?access_token=ACCESS_TOKEN
POST数据格式	json
3.1.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
POST数据	是	邮费信息
3.1.3	POST数据
数据示例：
{
	"delivery_template": {
		"Name": "testexpress", 
		"Assumer": 0, 
		"Valuation": 0, 
		"TopFee": [
			{
				"Type": 10000027, 
				"Normal": {
					"StartStandards": 1, 
					"StartFees": 2, 
					"AddStandards": 3,
					"AddFees": 1
				}, 
				"Custom": [{
					"StartStandards": 1, 
					"StartFees": 100, 
					"AddStandards": 1,
					"AddFees": 3, 
					"DestCountry": "中国", 
					"DestProvince": "广东省", 
					"DestCity": "广州市"
				}]
			}, 
			{
				"Type": 10000028, 
				"Normal": {
					"StartStandards": 1, 
					"StartFees": 3, 
					"AddStandards": 3,
					"AddFees": 2
				}, 
				"Custom": [{
					"StartStandards": 1, 
					"StartFees": 10, 
					"AddStandards": 1,
					"AddFees": 30, 
					"DestCountry": "中国", 
					"DestProvince": "广东省", 
					"DestCity": "广州市"
				}]
			}, 
			{
				"Type": 10000029, 
				"Normal": {
					"StartStandards": 1, 
					"StartFees": 4, 
					"AddStandards": 3,
					"AddFees": 3
				}, 
				"Custom": [{
					"StartStandards": 1, 
					"StartFees": 8, 
					"AddStandards": 2,
					"AddFees": 11, 
					"DestCountry": "中国", 
					"DestProvince": "广东省", 
					"DestCity": "广州市"
				}]
			}
		]
	}
}
字段	说明
Name	邮费模板名称
Assumer	支付方式(0-买家承担运费, 1-卖家承担运费)
Valuation	计费单位(0-按件计费, 1-按重量计费, 2-按体积计费，目前只支持按件计费，默认为0)
TopFee		具体运费计算
	Type	快递类型ID(参见增加商品/快递列表)
	Normal		默认邮费计算方法
		StartStandards	起始计费数量(比如计费单位是按件, 填2代表起始计费为2件)
		StartFees	起始计费金额(单位: 分）
		AddStandards	递增计费数量
		AddFees	递增计费金额(单位 : 分)
	Custom		指定地区邮费计算方法
		StartStandards	起始计费数量
		StartFees	起始计费金额(单位: 分）
		AddStandards	递增计费数量
		AddFees	递增计费金额(单位 : 分)
		DestCountry	指定国家(详见《地区列表》说明)
		DestProvince	指定省份(详见《地区列表》说明)
		DestCity	指定城市(详见《地区列表》说明)
例子解析：Type为10000027的默认邮费计算，第1件邮费2分，每增加3件邮费增加3分。Type为10000027的指定地区邮费计算，寄送到中国/广东省/广州市的商品，第一件邮费1元，每增加1件邮费增加3分。
3.1.4	返回数据说明
数据示例：
{
    "errcode": 0,
"errmsg": "success"， 
"template_id": 123456
}
字段	说明
errcode	错误码
errmsg	错误信息
template_id	邮费模板ID
3.1.5	附：地区列表（市下的区县过多，在此不显示）
Country	Province	City
中国	北京市	北京市
	天津市	天津市
	河北省	石家庄市
		唐山市
		秦皇岛市
		邯郸市
		邢台市
		保定市
		张家口市
		承德市
		沧州市
		廊坊市
		衡水市
	山西省	太原市
		大同市
		阳泉市
		长治市
		晋城市
		朔州市
		晋中市
		运城市
		忻州市
		临汾市
		吕梁市
	内蒙古自治区	呼和浩特市
		包头市
		乌海市
		赤峰市
		通辽市
		鄂尔多斯市
		呼伦贝尔市
		巴彦淖尔市
		乌兰察布市
		兴安盟
		锡林郭勒盟
		阿拉善盟
	辽宁省	沈阳市
		大连市
		鞍山市
		抚顺市
		本溪市
		丹东市
		锦州市
		营口市
		阜新市
		辽阳市
		盘锦市
		铁岭市
		朝阳市
		葫芦岛市
	吉林省	长春市
		吉林市
		四平市
		辽源市
		通化市
		白山市
		松原市
		白城市
		延边朝鲜族自治州
	黑龙江省	哈尔滨市
		齐齐哈尔市
		鸡西市
		鹤岗市
		双鸭山市
		大庆市
		伊春市
		佳木斯市
		七台河市
		牡丹江市
		黑河市
		绥化市
		大兴安岭地区
	上海市	上海市
	江苏省	南京市
		无锡市
		徐州市
		常州市
		苏州市
		南通市
		连云港市
		淮安市
		盐城市
		扬州市
		镇江市
		泰州市
		宿迁市
	浙江省	杭州市
		宁波市
		温州市
		嘉兴市
		湖州市
		绍兴市
		金华市
		衢州市
		舟山市
		台州市
		丽水市
	安徽省	合肥市
		芜湖市
		蚌埠市
		淮南市
		马鞍山市
		淮北市
		铜陵市
		安庆市
		黄山市
		滁州市
		阜阳市
		宿州市
		六安市
		亳州市
		池州市
		宣城市
	福建省	福州市
		厦门市
		莆田市
		三明市
		泉州市
		漳州市
		南平市
		龙岩市
		宁德市
	江西省	南昌市
		景德镇市
		萍乡市
		九江市
		新余市
		鹰潭市
		赣州市
		吉安市
		宜春市
		抚州市
		上饶市
	山东省	济南市
		青岛市
		淄博市
		枣庄市
		东营市
		烟台市
		潍坊市
		济宁市
		泰安市
		威海市
		日照市
		莱芜市
		临沂市
		德州市
		聊城市
		滨州市
		菏泽市
	河南省	郑州市
		开封市
		洛阳市
		平顶山市
		安阳市
		鹤壁市
		新乡市
		焦作市
		濮阳市
		许昌市
		漯河市
		三门峡市
		南阳市
		商丘市
		信阳市
		周口市
		驻马店市
		省直辖县级行政区划
	湖北省	武汉市
		黄石市
		十堰市
		宜昌市
		襄阳市
		鄂州市
		荆门市
		孝感市
		荆州市
		黄冈市
		咸宁市
		随州市
		恩施土家族苗族自治州
		省直辖县级行政区划
	湖南省	长沙市
		株洲市
		湘潭市
		衡阳市
		邵阳市
		岳阳市
		常德市
		张家界市
		益阳市
		郴州市
		永州市
		怀化市
		娄底市
		湘西土家族苗族自治州
	广东省	广州市
		韶关市
		深圳市
		珠海市
		汕头市
		佛山市
		江门市
		湛江市
		茂名市
		肇庆市
		惠州市
		梅州市
		汕尾市
		河源市
		阳江市
		清远市
		东莞市
		中山市
		潮州市
		揭阳市
		云浮市
	广西壮族自治区	南宁市
		柳州市
		桂林市
		梧州市
		北海市
		防城港市
		钦州市
		贵港市
		玉林市
		百色市
		贺州市
		河池市
		来宾市
		崇左市
	海南省	海口市
		三亚市
		三沙市
		省直辖县级行政区划
	重庆市	重庆市
	四川省	成都市
		自贡市
		攀枝花市
		泸州市
		德阳市
		绵阳市
		广元市
		遂宁市
		内江市
		乐山市
		南充市
		眉山市
		宜宾市
		广安市
		达州市
		雅安市
		巴中市
		资阳市
		阿坝藏族羌族自治州
		甘孜藏族自治州
		凉山彝族自治州
	贵州省	贵阳市
		六盘水市
		遵义市
		安顺市
		毕节市
		铜仁市
		黔西南布依族苗族自治州
		黔东南苗族侗族自治州
		黔南布依族苗族自治州
	云南省	昆明市
		曲靖市
		玉溪市
		保山市
		昭通市
		丽江市
		普洱市
		临沧市
		楚雄彝族自治州
		红河哈尼族彝族自治州
		文山壮族苗族自治州
		西双版纳傣族自治州
		大理白族自治州
		德宏傣族景颇族自治州
		怒江傈僳族自治州
		迪庆藏族自治州
	西藏自治区	拉萨市
		昌都地区
		山南地区
		日喀则地区
		那曲地区
		阿里地区
		林芝地区
	陕西省	西安市
		铜川市
		宝鸡市
		咸阳市
		渭南市
		延安市
		汉中市
		榆林市
		安康市
		商洛市
	甘肃省	兰州市
		嘉峪关市
		白银市
		武威市
		张掖市
		平凉市
		酒泉市
		庆阳市
		定西市
		陇南市
		临夏回族自治州
		甘南藏族自治州
	青海省	西宁市
		海东地区
		海北藏族自治州
		黄南藏族自治州
		海南藏族自治州
		果洛藏族自治州
		玉树藏族自治州
		海西蒙古族藏族自治州
	宁夏回族自治区	银川市
		石嘴山市
		吴忠市
		固原市
		中卫市
	新疆维吾尔自治区	乌鲁木齐市
		克拉玛依市
		吐鲁番地区
		哈密地区
		昌吉回族自治州
		博尔塔拉蒙古自治州
		巴音郭楞蒙古自治州
		阿克苏地区
		克孜勒苏柯尔克孜自治州
		喀什地区
		和田地区
		伊犁哈萨克自治州
		塔城地区
		阿勒泰地区
		自治区直辖县级行政区划
3.2	删除邮费模板
3.2.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/express/del?access_token=ACCESS_TOKEN
POST数据格式	json
3.2.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
POST数据	是	邮费信息
3.2.3	POST数据
数据示例：
{
    "template_id": 123456
}
字段	说明
template_id	邮费模板ID
3.2.4	返回数据说明
数据示例：
{
    "errcode": 0,
"errmsg": "success"
}
字段	说明
errcode	错误码
errmsg	错误信息
3.3	修改邮费模板
3.3.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/express/update?access_token=ACCESS_TOKEN
POST数据格式	json
3.3.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
POST数据	是	邮费信息
3.3.3	POST数据
数据示例：
{
    "template_id": 123456, 
	"delivery_template": ...
}
字段	说明
template_id	邮费模板ID
delivery_template	邮费模板信息(字段说明详见增加邮费模板)
3.3.4	返回数据说明
数据示例：
{
    "errcode": 0,
"errmsg": "success"
}
字段	说明
errcode	错误码
errmsg	错误信息
3.4	获取指定ID的邮费模板
3.4.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/express/getbyid?access_token=ACCESS_TOKEN
POST数据格式	json
3.4.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
POST数据	是	邮费信息
3.4.3	POST数据
数据示例：
{
    "template_id": 123456
}
字段	说明
template_id	邮费模板ID
3.4.4	返回数据说明
数据示例：
{
  "errcode": 0,
  "errmsg": "success",
  "template_info": {
    "Id": 103312916,
    "Name": "testexpress",
    "Assumer": 0,
    "Valuation": 0,
    "TopFee": [
      {
        "Type": 10000027,
        "Normal": {
          "StartStandards": 1,
          "StartFees": 2,
          "AddStandards": 3,
          "AddFees": 1
        },
        "Custom": [
          {
            "StartStandards": 1,
            "StartFees": 1000,
            "AddStandards": 1,
            "AddFees": 3,
            "DestCountry": "中国",
            "DestProvince": "广东省",
            "DestCity": "广州市"
          }
        ]
      },
      {
        "Type": 10000028,
        "Normal": {
          "StartStandards": 1,
          "StartFees": 3,
          "AddStandards": 3,
          "AddFees": 2
        },
        "Custom": [
          {
            "StartStandards": 1,
            "StartFees": 10,
            "AddStandards": 1,
            "AddFees": 30,
            "DestCountry": "中国",
            "DestProvince": "广东省",
            "DestCity": "广州市"
          }
        ]
      },
      {
        "Type": 10000029,
        "Normal": {
          "StartStandards": 1,
          "StartFees": 4,
          "AddStandards": 3,
          "AddFees": 3
        },
        "Custom": [
          {
            "StartStandards": 1,
            "StartFees": 8,
            "AddStandards": 2,
            "AddFees": 11,
            "DestCountry": "中国",
            "DestProvince": "广东省",
            "DestCity": "广州市"
          }
        ]
      }
    ]
  }
}
字段	说明
errcode	错误码
errmsg	错误信息
template_info	邮费模板信息(字段说明详见增加邮费模板)
3.5	获取所有邮费模板
3.5.1	接口调用请求说明
协议	https
http请求方式	GET
请求Url	https://api.weixin.qq.com/merchant/express/getall?access_token=ACCESS_TOKEN
3.5.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
3.5.3	返回数据说明
数据示例：
{
  "errcode": 0,
  "errmsg": "success",
  "templates_info": [
      {
        "Id": 103312916,
        "Name": "testexpress1",
        "Assumer": 0,
        "Valuation": 0,
        "TopFee": [...], 
      }, 
      {
        "Id": 103312917,
        "Name": "testexpress2",
        "Assumer": 0,
        "Valuation": 2,
        "TopFee": [...], 
      }, 
      {
        "Id": 103312918,
        "Name": "testexpress3",
        "Assumer": 0,
        "Valuation": 1,
        "TopFee": [...], 
      }
  ]
}
字段	说明
errcode	错误码
errmsg	错误信息
templates_info	所有邮费模板集合(字段说明详见增加邮费模板)




4.	分组管理接口
4.1	增加分组
4.1.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/group/add?access_token=ACCESS_TOKEN
POST数据格式	json
4.1.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品分组信息
4.1.3	POST数据
数据示例：
{
    "group_detail" : {
        "group_name": "测试分组", 
        "product_list" : [
            "pDF3iY9cEWyMimNlKbik_NYJTzYU", 
            "pDF3iY4kpZagQfwJ_LVQBaOC-LsM"
        ]
    }
}
字段	说明
group_name	分组名称
product_list	商品ID集合
4.1.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success",
"group_id": 19
}
字段	说明
errcode	错误码
errmsg	错误信息
group_id	分组ID
4.2	删除分组
4.2.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/group/del?access_token=ACCESS_TOKEN
POST数据格式	json
4.2.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	商品分组信息
4.2.3	POST数据
数据示例：
{
	"group_id": 19
} 
字段	说明
group_id	分组ID
4.2.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
4.3	修改分组属性
4.3.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/group/propertymod?access_token=ACCESS_TOKEN
POST数据格式	json
4.3.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	分组属性
4.3.3	POST数据
数据示例：
{
	"group_id": 28,
	"group_name":"特惠专场"
}
4.3.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
4.4	修改分组商品
4.4.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/group/productmod?access_token=ACCESS_TOKEN
POST数据格式	json
4.4.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	分组商品信息
4.4.3	POST数据
数据示例：
{
	"group_id": 28, 
	"product": [
		{
			"product_id": "pDF3iY-CgqlAL3k8Ilz-6sj0UYpk",
			"mod_action": 1
		}, 
		{
			"product_id": "pDF3iY-RewlAL3k8Ilz-6sjsepp9",
			"mod_action": 0
		}, 
	]
}
字段	说明
group_id	分组ID
product		分组的商品集合
	product_id	商品ID
	mod_action	修改操作(0-删除, 1-增加)
4.4.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
4.5	获取所有分组
4.5.1	接口调用请求说明
协议	https
http请求方式	GET
请求Url	https://api.weixin.qq.com/merchant/group/getall?access_token=ACCESS_TOKEN
4.5.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
4.5.3	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success",
	"groups_detail": [
		{
		  "group_id": 200077549,
		  "group_name": "最新上架"
		},
		{
		  "group_id": 200079772,
		  "group_name": "全球热卖"
		}
	]
}
字段	说明
errcode	错误码
errmsg	错误信息
groups_detail		分组集合
	group_id	分组ID
	group_name	分组名称
4.6	根据分组ID获取分组信息
4.6.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/group/getbyid?access_token=ACCESS_TOKEN
POST数据格式	json
4.6.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	分组信息
4.6.3	POST数据
数据示例：
{
    "group_id": 29
}
字段	说明
group_id	分组ID
4.6.4	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success",
	"group_detail": {
		"group_id": 200077549,
		"group_name": "最新上架",
		"product_list": [
		  "pDF3iYzZoY-Budrzt8O6IxrwIJAA",
		  "pDF3iY3pnWSGJcO2MpS2Nxy3HWx8",
		  "pDF3iY33jNt0Dj3M3UqiGlUxGrio"
		]
	}
}
字段	说明
errcode	错误码
errmsg	错误信息
groups_detail		分组信息
	group_id	分组ID
	group_name	分组名称
	product_list	商品ID集合










5.	货架管理接口
5.1	增加货架
5.1.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/shelf/add?access_token=ACCESS_TOKEN
POST数据格式	json
5.1.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	货架详情信息
5.1.3	POST数据
{
	"shelf_data": {
	  "module_infos": [
		{
		  "group_info": {
			"filter": {
			  "count": 2
			},
			"group_id": 50
		  },
		  "eid": 1
		},
		{
			"group_infos": {
				"groups": [
				  {
					"group_id": 49
				  },
				  {
					"group_id": 50
				  },
				  {
					"group_id": 51
				  }
				]
		  },
		  "eid": 2
		},
		{
		  "group_info": {
			"group_id": 52,
			"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5Jm64z4I0TTicv0TjN7Vl9bykUUibYKIOjicAwIt6Oy0Y6a1Rjp5Tos8tg/0"
		  },
		  "eid": 3
		},
		{
		  "group_infos": {  
			"groups": [
			  {
				"group_id": 49,
				"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5uUQx7TLx4tB9qZfbe3JmqR4NkkEmpb5LUWoXF1ek9nga0IkeSSFZ8g/0"
			  },
			  {
				"group_id": 50,
				"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5G1kdy3ViblHrR54gbCmbiaMnl5HpLGm5JFeENyO9FEZAy6mPypEpLibLA/0"
			  },
			  {
				"group_id": 52,
				"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5uUQx7TLx4tB9qZfbe3JmqR4NkkEmpb5LUWoXF1ek9nga0IkeSSFZ8g/0"
			  }
			]
		  },
		  "eid": 4
		}, 
		{
		  "group_infos": {
			"groups": [
			  {
				"group_id": 43
			  },
			  {
				"group_id": 44
			  },
			  {
				"group_id": 45
			  },
			  {
				"group_id": 46
			  }
			],
			"img_background": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5uUQx7TLx4tB9qZfbe3JmqR4NkkEmpb5LUWoXF1ek9nga0IkeSSFZ8g/0"
		  },
		  "eid": 5
		}
	  ]
	}, 
	"shelf_banner": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2ibrWQn8zWFUh1YznsMV0XEiavFfLzDWYyvQOBBszXlMaiabGWzz5B2KhNn2IDemHa3iarmCyribYlZYyw/0", 
	"shelf_name": "测试货架"
}
字段	说明
shelf_data	货架信息(数据说明详见《货架控件说明》)
shelf_banner	货架招牌图片Url(图片需调用图片上传接口获得图片Url填写至此，否则添加货架失败，建议尺寸为640*120，仅控件1-4有banner，控件5没有banner)
shelf_name	货架名称
5.1.4	货架控件说明
5.1.4.1	控件1
控件1是由一个分组组成，展示该分组指定数量的商品列表，可与控件2、控件3、控件4联合使用。
A. POST数据/控件UI


{
  "group_info": {
	"filter": {
	  "count": 4
	},
	"group_id": 50
  },
  "eid": 1
}


	 
B. 数据说明
字段	说明
group_info		分组信息
	count	该控件展示商品个数
	group_id	分组ID
eid	控件1的ID
5.1.4.2	控件2
控件2是由多个分组组成（最多有4个分组），展示指定分组的名称，可与控件1、控件3、控件4联合使用。
A. POST数据/控件UI

{
	"group_infos": {
		"groups": [
		  {
			"group_id": 49
		  },
		  {
			"group_id": 50
		  },
		  {
			"group_id": 51
		  }
		]
  },
  "eid": 2
}

	 
B. 数据说明
字段	说明
groups		分组数组
	group_id	分组ID
eid	控件2的ID
5.1.4.3	控件3
控件3是由一个分组组成，展示指定分组的分组图片，可与控件1、控件2、控件4联合使用。
A. POST数据/控件UI


{
  "group_info": {
	"group_id": 52,
	"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5Jm64z4I0TTicv0TjN7Vl9bykUUibYKIOjicAwIt6Oy0Y6a1Rjp5Tos8tg/0"
  },
  "eid": 3
}

	 
B. 数据说明
字段	说明
group_info		分组信息
	group_id	分组ID
img	分组照片(图片需调用图片上传接口获得图片Url填写至此，否则添加货架失败，建议分辨率600*208)
eid	控件3的ID
5.1.4.4	控件4
控件4是由多个分组组成（最多3个分组），展示指定分组的分组图片，可与控件1、控件2、控件4联合使用。
A. POST数据/控件UI
{
  "group_infos": {  
	"groups": [
	  {
		"group_id": 49,
		"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5uUQx7TLx4tB9qZfbe3JmqR4NkkEmpb5LUWoXF1ek9nga0IkeSSFZ8g/0"
	  },
	  {
		"group_id": 50,
		"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5G1kdy3ViblHrR54gbCmbiaMnl5HpLGm5JFeENyO9FEZAy6mPypEpLibLA/0"
	  },
	  {
		"group_id": 52,
		"img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5uUQx7TLx4tB9qZfbe3JmqR4NkkEmpb5LUWoXF1ek9nga0IkeSSFZ8g/0"
	  }
	]
  },
  "eid": 4
}	 
B. 数据说明
字段	说明
groups		分组列表
	group_id	分组ID
	img	分组照片(图片需调用图片上传接口获得图片Url填写至此，否则添加货架失败，3个分组建议分辨率分别为: 350*350, 244*172, 244*172)
eid	控件4的ID
5.1.4.5	控件5
控件5是由多个分组组成，展示指定分组的名称，不可与其他控件联合使用。
A. POST数据/UI展示
{
  "group_infos": {
	"groups": [
	  {
		"group_id": 43
	  },
	  {
		"group_id": 44
	  },
	  {
		"group_id": 45
	  },
	  {
		"group_id": 46
	  }
	],
	"img_background": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl29nqqObBwFwnIX3licVPnFV5uUQx7TLx4tB9qZfbe3JmqR4NkkEmpb5LUWoXF1ek9nga0IkeSSFZ8g/0"
  },
  "eid": 5
}	


 
B. 数据说明
字段	说明
groups		分组列表
	group_id	分组ID
	img	分组照片(图片需调用图片上传接口获得图片Url填写至此，否则添加货架失败，建议分辨率640*1008)
eid	控件5的ID
5.1.5	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success",
"shelf_id": 12
}
字段	说明
errcode	错误码
errmsg	错误信息
shelf_id	货架ID
5.2	删除货架
5.2.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/shelf/del?access_token=ACCESS_TOKEN
POST数据格式	json
5.2.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	货架信息
5.2.3	POST数据
数据示例：
{
	"shelf_id": 19
}
字段	说明
shelf_id	货架ID
5.2.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
5.3	修改货架
5.3.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/shelf/mod?access_token=ACCESS_TOKEN
POST数据格式	json
5.3.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	货架详情信息
5.3.3	POST数据
数据示例：
{
	"shelf_id": 12345, 
	"shelf_data": ..., 
	"shelf_banner": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2ibrWQn8zWFUh1YznsMV0XEiavFfLzDWYyvQOBBszXlMaiabGWzz5B2KhNn2IDemHa3iarmCyribYlZYyw/0", 
	"shelf_name": "测试货架"
}
字段	说明
shelf_id	货架ID
shelf_data	货架详情(字段说明详见增加货架)
shelf_banner	货架banner(图片需调用图片上传接口获得图片Url填写至此，否则修改货架失败)
shelf_name	货架名称
5.3.4	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success"
}
字段	说明
errcode	错误码
errmsg	错误信息
5.4	获取所有货架
5.4.1	接口调用请求说明
协议	https
http请求方式	GET
请求Url	https://api.weixin.qq.com/merchant/shelf/getall?access_token=ACCESS_TOKEN
5.4.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
5.4.3	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success",
	"shelves": [
		{
		  "shelf_info": {
			"module_infos": [
			  {
				"group_infos": {
				  "groups": [
					{
					  "group_id": 200080093
					},
					{
					  "group_id": 200080118
					},
					{
					  "group_id": 200080119
					},
					{
					  "group_id": 200080135
					}
				  ],
				  "img_background": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl294FzPwnf9dAcaN7ButStztAZyy2yHY8pW6sTQKicIhAy5F0a2CqmrvDBjMFLtc2aEhAQ7uHsPow9A/0"
				},
				"eid": 5
			  }
			]
		  },
		  "shelf_banner": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl294FzPwnf9dAcaN7ButStztAZyy2yHY8pW6sTQKicIhAy5F0a2CqmrvDBjMFLtc2aEhAQ7uHsPow9A/0",
		  "shelf_name": "新新人类",
		  "shelf_id": 22
		},
		{
		  "shelf_info": {
			"module_infos": [
			  {
				"group_info": {
				  "group_id": 200080119,
				  "filter": {
					"count": 4
				  }
				},
				"eid": 1
			  }
			]
		  },
		  "shelf_banner": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl294FzPwnf9dAcaN7ButStztAZyy2yHY8pW6sTQKicIhAy5F0a2CqmrvDBjMFLtc2aEhAQ7uHsPow9A/0",
		  "shelf_name": "店铺",
		  "shelf_id": 23
		}
	]
}
字段	说明
errcode	错误码
errmsg	错误信息
shelves	所有货架集合(字段说明详见增加货架)
5.5	根据货架ID获取货架信息
5.5.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/shelf/getbyid?access_token=ACCESS_TOKEN
POST数据格式	json
5.5.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
POST数据	是	货架信息
5.5.3	POST数据
数据示例：
{
	"shelf_id": 19
}
字段	说明
shelf_id	货架ID
5.5.4	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success",
	"shelf_info": {
		"module_infos": [...]
	},
	"shelf_banner": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2ibp2DgDXiaic6WdflMpNdInS8qUia2BztlPu1gPlCDLZXEjia2qBdjoLiaCGUno9zbs1UyoqnaTJJGeEew/0",
	"shelf_name": "新建货架",
	"shelf_id": 97
}
字段	说明
errcode	错误码
errmsg	错误信息
shelf_info	货架详情(字段说明详见增加货架)
shelf_banner	货架banner
shelf_name	货架名称
shelf_id	货架ID
5.6	开发者将自己的页面作为货架
微信小店的货架支持开放给开发者使用，即开发者可以将自己的页面作为货架，通过JavaScript API来调起微信客户端原生的商品详情页。

请注意：
1、	开发者需要预先通过1.1中的增加商品API，预先上传商品，得到product_id后，才能在自己的页面通过JavaScript API来调起商品详情页
2、	即使开发者将自己的页面作为货架，但由于商品存储仍在微信服务器，所以用户下单后，订单、库存管理等事务，开发者仍需要根据微信小店系列接口来完成。

具体JavaScript API调用示例代码如下：
function openProductView(){
if (typeof WeixinJSBridge == "undefined")
return false;

var pid = "pDF3iY_G88cM_d-wuImym3tkVfG5";//只需要传递
WeixinJSBridge.invoke('openProductViewWithPid',{
"pid":pid
},function(res){
// 返回res.err_msg,取值 
// open_product_view_with_id:ok 打开成功
alert(res.err_msg);
if (res.err_msg != "open_product_view_with_id:ok"){
WeixinJSBridge.invoke('openProductView',{
"productInfo":"{\"product_id\":\""+pid+"\",\"product_type\":0}"
},function(res){ 
alert(res.err_msg);
});
}
});
}
说明：
1、	变量pid即为在增加商品接口中获得的product_id。





























6.	订单管理接口
6.1	订单付款通知
在用户在微信中付款成功后，微信服务器会将订单付款通知推送到开发者在公众平台网站中设置的回调URL（在开发模式中设置）中，如未设置回调URL，则获取不到该事件推送。

事件推送的内容如下：
<xml>
<ToUserName><![CDATA[weixin_media1]]></ToUserName>
<FromUserName><![CDATA[oDF3iYyVlek46AyTBbMRVV8VZVlI]]></FromUserName>
<CreateTime>1398144192</CreateTime>
<MsgType><![CDATA[event]]></MsgType>
<Event><![CDATA[merchant_order]]></Event>
<OrderId><![CDATA[test_order_id]]></OrderId>
<OrderStatus>2</OrderStatus>
<ProductId><![CDATA[test_product_id]]></ProductId>
<SkuInfo><![CDATA[10001:1000012;10002:100021]]></SkuInfo>
</xml>
字段说明请见订单详情。
6.2	根据订单ID获取订单详情
6.2.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/order/getbyid?access_token=ACCESS_TOKEN
POST数据格式	json
6.2.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
POST数据	是	商品订单信息
6.2.3	POST数据
数据示例：
{
    "order_id": "7197417460812584720" 
}
字段	说明
order_id	订单ID
6.2.4	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success",
	"order": {
		"order_id": "7197417460812533543",
		"order_status": 6,
		"order_total_price": 6,
		"order_create_time": 1394635817,
		"order_express_price": 5,
		"buyer_openid": "oDF3iY17NsDAW4UP2qzJXPsz1S9Q",
		"buyer_nick": "likeacat",
		"receiver_name": "张小猫",
		"receiver_province": "广东省",
		"receiver_city": "广州市",
"receiver_zone": "天河区",
		"receiver_address": "华景路一号南方通信大厦5楼",
		"receiver_mobile": "123456789",
		"receiver_phone": "123456789",
		"product_id": "pDF3iYx7KDQVGzB7kDg6Tge5OKFo",
		"product_name": "安莉芳E-BRA专柜女士舒适内衣蕾丝3/4薄杯聚拢上托性感文胸KB0716",
		"product_price": 1,
		"product_sku": "10000983:10000995;10001007:10001010",
		"product_count": 1,
		"product_img": "http://img2.paipaiimg.com/00000000/item-52B87243-63CCF66C00000000040100003565C1EA.0.300x300.jpg",
		"delivery_id": "1900659372473",
		"delivery_company": "059Yunda", 
		"trans_id": "1900000109201404103172199813"
	}
}
字段	说明
errcode	错误码
errmsg	错误信息
order		订单详情
	order_id	订单ID
	order_status	订单状态
	order_total_price	订单总价格(单位 : 分)
	order_create_time	订单创建时间
	order_express_price	订单运费价格(单位 : 分)
	buyer_openid	买家微信OPENID
	buyer_nick	买家微信昵称
	receiver_name	收货人姓名
	receiver_province	收货地址省份
	receiver_city	收货地址城市
	receiver_zone	收货地址区/县
	receiver_address	收货详细地址
	receiver_mobile	收货人移动电话
	receiver_phone	收货人固定电话
	product_id	商品ID
	product_name	商品名称
	product_price	商品价格(单位 : 分)
	product_sku	商品SKU
	product_count	商品个数
	product_img	商品图片
	delivery_id	运单ID
	delivery_company	物流公司编码
	trans_id	交易ID
6.3	根据订单状态/创建时间获取订单详情
6.3.1	接口调用请求说明
协议	https
http请求方式	GET
请求Url	https://api.weixin.qq.com/merchant/order/getbyfilter?access_token=ACCESS_TOKEN
POST数据格式	json
6.3.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
6.3.3	POST数据
数据示例：
{
"status": 2, 
"begintime": 1397130460, 
"endtime": 1397130470
}
字段	说明
status	订单状态(不带该字段-全部状态, 2-待发货, 3-已发货, 5-已完成, 8-维权中, )
begintime	订单创建时间起始时间(不带该字段则不按照时间做筛选)
endtime	订单创建时间终止时间(不带该字段则不按照时间做筛选)
6.3.4	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success",
	"order_list": [
		{
		  "order_id": "7197417460812533543",
		  "order_status": 6,
		  "order_total_price": 6,
		  "order_create_time": 1394635817,
		  "order_express_price": 5,
		  "buyer_openid": "oDF3iY17NsDAW4UP2qzJXPsz1S9Q",
		  "buyer_nick": "likeacat",
		  "receiver_name": "张小猫",
		  "receiver_province": "广东省",
		  "receiver_city": "广州市",
		  "receiver_address": "华景路一号南方通信大厦5楼",
		  "receiver_mobile": "123456",
		  "receiver_phone": "123456",
		  "product_id": "pDF3iYx7KDQVGzB7kDg6Tge5OKFo", 
		  "product_name": "安莉芳E-BRA专柜女士舒适内衣蕾丝3/4薄杯聚拢上托性感文胸KB0716",
		  "product_price": 1,
		  "product_sku": "10000983:10000995;10001007:10001010",
		  "product_count": 1,
		  "product_img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2icND8WwMThBEcehjhDv2icY4GrDSG5RLM3B2qd9kOicWGVJcsAhvXfibhWRNoGOvCfMC33G9z5yQr2Qw/0",
		  "delivery_id": "1900659372473",
		  "delivery_company": "059Yunda", 
		  "trans_id": "1900000109201404103172199813"
		},
		{
		  "order_id": "7197417460812533569",
		  "order_status": 8,
		  "order_total_price": 1,
		  "order_create_time": 1394636235,
		  "order_express_price": 0,
		  "buyer_openid": "oDF3iY17NsDAW4UP2qzJXPsz1S9Q",
		  "buyer_nick": "likeacat",
		  "receiver_name": "张小猫",
		  "receiver_province": "广东省",
		  "receiver_city": "广州市",
		  "receiver_address": "华景路一号南方通信大厦5楼",
		  "receiver_mobile": "123456",
		  "receiver_phone": "123456",
		  "product_id": "pDF3iYx7KDQVGzB7kDg6Tge5OKFo", 
		  "product_name": "项坠333",
		  "product_price": 1,
		  "product_sku": "1075741873:1079742377",
		  "product_count": 1,
		  "product_img": "http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2icND8WwMThBEcehjhDv2icY4GrDSG5RLM3B2qd9kOicWGVJcsAhvXfibhWRNoGOvCfMC33G9z5yQr2Qw/0",
		  "delivery_id": "1900659372473",
		  "delivery_company": "059Yunda", 
   		  "trans_id": "1900000109201404103172199813"
		}
	]
}
字段	说明
errcode	错误码
errmsg	错误信息
order_list	所有订单集合(字段说明详见根据订单ID获取订单详情)
6.4	设置订单发货信息
6.4.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/order/setdelivery?access_token=ACCESS_TOKEN
POST数据格式	json
6.4.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
POST数据	是	商品物流信息
6.4.3	POST数据
数据示例：
{
    "order_id": "7197417460812533543", 
	"delivery_company": "059Yunda", 
	"delivery_track_no": "1900659372473"，
"need_delivery": 1，
"is_others": 0
}
字段	说明
order_id	订单ID
delivery_company	物流公司ID(参考《物流公司ID》；
当need_delivery为0时，可不填本字段；
当need_delivery为1时，该字段不能为空；
当need_delivery为1且is_others为1时，本字段填写其它物流公司名称)
delivery_track_no	运单ID(
当need_delivery为0时，可不填本字段；
当need_delivery为1时，该字段不能为空；
)
need_delivery	商品是否需要物流(0-不需要，1-需要，无该字段默认为需要物流)
is_others	是否为6.4.5表之外的其它物流公司(0-否，1-是，无该字段默认为不是其它物流公司)
6.4.4	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success"
}
字段	说明
errcode	错误码
errmsg	错误信息
6.4.5	附：物流公司ID
物流公司	ID
邮政EMS	Fsearch_code
申通快递	002shentong
中通速递	066zhongtong
圆通速递	056yuantong
天天快递	042tiantian
顺丰速运	003shunfeng
韵达快运	059Yunda
宅急送	064zhaijisong
汇通快运	020huitong
易迅快递	zj001yixun
6.5	关闭订单
6.5.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/order/close?access_token=ACCESS_TOKEN
POST数据格式	json
6.5.2	请求参数说明
参数	是否必须	说明
access_token	是	公众号的调用接口凭证
POST数据	是	商品订单信息
6.5.3	POST数据
数据示例：
{
    "order_id": "7197417460812584720" 
}
字段	说明
order_id	订单ID
6.5.4	返回数据说明
数据示例：
{
	"errcode": 0,
	"errmsg": "success"
}
字段	说明
errcode	错误码
errmsg	错误信息








7.	功能接口
7.1	上传图片
7.1.1	接口调用请求说明
协议	https
http请求方式	POST
请求Url	https://api.weixin.qq.com/merchant/common/upload_img?access_token=ACCESS_TOKEN&filename=test.png
POST数据	图片
7.1.2	请求参数说明
参数	是否必须	说明
access_token	是	调用接口凭证
filename	是	图片文件名(带文件类型后缀)
POST数据	是	图片数据
7.1.3	返回数据说明
数据示例：
{
    "errcode":0,
"errmsg":"success", 
"image_url": 	"http://mmbiz.qpic.cn/mmbiz/4whpV1VZl2ibl4JWwwnW3icSJGqecVtRiaPxwWEIr99eYYL6AAAp1YBo12CpQTXFH6InyQWXITLvU4CU7kic4PcoXA/0"
}
字段	说明
errcode	错误码
errmsg	错误信息
image_url	图片Url

