package com.mq.repositriestests;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import com.mq.app.ModernQuillApplication;
import com.mq.entities.Order;
import com.mq.repositories.OrderRepository;


@SpringBootTest (classes = ModernQuillApplication.class)
@Transactional
class TestOrderRepository {

	@Autowired
	OrderRepository oRepo;
	
//	@BeforeAll
//	void setUp() throws Exception {
//	}
//
//	@AfterAll
//	void tearDown() throws Exception {
//	}


//	@Autowired
//	OrderRepository oRepo;
	
	@Test
	@Rollback
	void testCreateOrder() {
		SimpleDateFormat dateTimeInCST = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		//Setting the time zone
		dateTimeInCST.setTimeZone(TimeZone.getTimeZone("CST"));
		Order or= new Order (0, 1, 1, 4,dateTimeInCST.format(new Date()) );
		
		Assertions.assertNotEquals(0, oRepo.save(or).getoId());
		System.out.println();
	}

	
	
	
}
















