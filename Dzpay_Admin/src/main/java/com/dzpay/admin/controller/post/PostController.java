package com.dzpay.admin.controller.post;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.dzpay.admin.common.dto.post.TbletcPost;
import com.dzpay.admin.common.service.EtcPostService;

@Controller
public class PostController {
	
	@Resource(name = "etcPostService")
	private EtcPostService etcPostService;

	@RequestMapping(value = "/mall/post", method = RequestMethod.GET)
	public ModelAndView showPost(@RequestParam(value="kind") String kind, Model model) throws Exception{
		ModelAndView mav = new ModelAndView("/mall/post");
		mav.addObject("kind", kind);
		System.out.println(kind);

		return mav;
	}
	
	@RequestMapping(value = "/mall/post/search", method = RequestMethod.POST)
	public ModelAndView resultPost(@RequestParam(value = "strDong") String word,
				@RequestParam(value="kind") String kind) throws Exception{
		List<TbletcPost> list = etcPostService.selectPost(word);
		String flag = (list.size() == 0)? "fail" : "succ";
		System.out.println(kind);
		System.out.println(word);
		System.out.println(list.size());
		ModelAndView mav = new ModelAndView("/mall/post");
		
		mav.addObject("kind", kind);
		mav.addObject("word", word);
		mav.addObject("flag", flag);
		mav.addObject("list", list);
		return mav;
	}
}
